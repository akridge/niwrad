package niwrad

import (
    "context"
    "errors"
    "fmt"
    "github.com/heroiclabs/nakama-common/runtime"
    "github.com/louis030195/niwrad/internal/storage"
    "github.com/louis030195/niwrad/internal/utils"
    appsv1 "k8s.io/api/apps/v1"
    apiv1 "k8s.io/api/core/v1"
    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
    "k8s.io/client-go/kubernetes"
    "k8s.io/client-go/rest"
    "sync/atomic"
)

type Account struct {
	email    string
	password string
	userID   string
}

var (
    adminCounter uint64
)

// Create an authoritative nakama match and spawn a deployment with x distributed containers
// distribution correspond to the number of containers handling this match
func startMatch(ctx context.Context, nk runtime.NakamaModule, userID string, distribution int) (string, error) {
	// Creating some admin accounts for the server containers
	var adminAccounts []Account
	params := make(map[string]interface{})
	for i := 0; i < distribution; i++ {
		email := fmt.Sprintf("admin%d@niwrad.com", i)
		password := utils.RandString(16)
		// TODO: do we care about these acc ? to be updated after feature "stop/restart" match happen
		// Register, if fail try to login
		userID, _, _, err := nk.AuthenticateEmail(ctx, email, password, fmt.Sprintf("admin%d", adminCounter), true)
		if err != nil {
            userID, _, _, err = nk.AuthenticateEmail(ctx, email, password, fmt.Sprintf("admin%d", adminCounter), false)
            if err != nil {
                return "", errors.New("couldn't log the unity node to an account")
            }
		}
        atomic.AddUint64(&adminCounter, 1)
		adminAccounts = append(adminAccounts, Account{email, password, userID})
		params[fmt.Sprintf("admin%d", i)] = userID
	}
	params["distribution"] = distribution
	matchId, err := nk.MatchCreate(ctx, "Niwrad", params)

	if err != nil {
		return "", err
	}

	// creates the in-cluster config
	config, err := rest.InClusterConfig()
	if err != nil {
		return "", err
	}
	c, err := kubernetes.NewForConfig(config)
	if err != nil {
		return "", err
	}

	// TODO: could also deploy directly pods btw
	deploymentsClient := c.AppsV1().Deployments(apiv1.NamespaceDefault)
	// TODO: check whats the purpose of those names except label selector
	deployment := &appsv1.Deployment{
		ObjectMeta: metav1.ObjectMeta{
			Name: "niwrad-unity",
		},
		Spec: appsv1.DeploymentSpec{
			Selector: &metav1.LabelSelector{
				MatchLabels: map[string]string{
					"app": fmt.Sprintf("niwrad-unity-%s", matchId),
				},
			},
			Template: apiv1.PodTemplateSpec{
				ObjectMeta: metav1.ObjectMeta{
					Labels: map[string]string{
						"app": fmt.Sprintf("niwrad-unity-%s", matchId),
					},
				},
				Spec: apiv1.PodSpec{
				    // https://github.com/kubernetes/kubernetes/issues/24725
                    //RestartPolicy: apiv1.RestartPolicyNever, // Non-redundant pods currently
                },
			},
		},
	}
	for i := 0; i < distribution; i++ {
		deployment.Spec.Template.Spec.Containers = append(deployment.Spec.Template.Spec.Containers,
			apiv1.Container{
				Name:  fmt.Sprintf("niwrad-unity-%d", i),
				Image: "niwrad-unity",
				//Command: []string{
				//	"/app/niwrad.x86_64",
				//},
				Env: []apiv1.EnvVar{
					{
						Name:  "NAKAMA_IP",
						Value: "niwrad",
					},
					{
						Name:  "NAKAMA_PORT",
						Value: "7350",
					},
					{
						Name:  "MATCH_ID",
						Value: matchId,
					},
					{
						Name:  "EMAIL",
						Value: adminAccounts[i].email,
					},
					{
						Name:  "PASSWORD",
						Value: adminAccounts[i].password,
					},
				},
				ImagePullPolicy: apiv1.PullNever,
			})
	}

	// Create Deployment
	_, err = deploymentsClient.Create(deployment) // TODO: delete deployment on exit ?
	if err != nil {
		return "", err
	}

	if err := storage.UpdateMatch(ctx, nk, matchId, userID); err != nil {
		return "", err
	}
	return matchId, nil
}

func stopMatch(matchId string) error {
	config, err := rest.InClusterConfig()
	if err != nil {
		return err
	}
	c, err := kubernetes.NewForConfig(config)
	if err != nil {
		return err
	}
	deploymentsClient := c.AppsV1().Deployments(apiv1.NamespaceDefault)
	err = deploymentsClient.DeleteCollection(&metav1.DeleteOptions{}, metav1.ListOptions{
		LabelSelector: fmt.Sprintf("niwrad-unity-%s", matchId),
	})
	if err != nil {
		return err
	}
	return nil
}

//func rollingUpdate(c *kubernetes.Clientset, dp *v1beta1.Deployment) error {
//	dp := v1beta1.Deployment{
//		TypeMeta:   metav1.TypeMeta{},
//		ObjectMeta: metav1.ObjectMeta{},
//		Spec:       v1beta1.DeploymentSpec{},
//		Status:     v1beta1.DeploymentStatus{},
//	}
//	// Update
//	_, err := c.ExtensionsV1beta1().Deployments("").Update(dp)
//	if err != nil {
//		return err
//	}
//	return nil
//}
