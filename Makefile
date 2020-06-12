UNITY_PROJECT_PATH ?= $(HOME)/Documents/unity/niwrad
NS ?= niwrad
VERSION ?= 1.0.0
EDITOR_PATH ?= $(HOME)/Unity/Hub/Editor/2019.2.17f1/Editor/Unity
IMAGE_NAME ?= niwrad
CONTAINER_NAME ?= niwrad
CONTAINER_INSTANCE ?= default


.PHONY: help build build-headless client server nakama proto docker-build docker-run
help:
		@echo ''
		@echo 'Usage: make [TARGET]'
		@echo 'Targets:'
		@echo '  install    	blabla'
		@echo ''


build:
	rm -rf Builds/Linux
	$(EDITOR_PATH) -batchmode -quit -logFile /tmp/$(NS)_unity_build.log -projectPath $(UNITY_PROJECT_PATH) \
		-buildLinux64Player $(UNITY_PROJECT_PATH)/Builds/Linux -executeMethod Editor.Builds.BuildLinux \
		-silent-crashes -headless 

build-headless:
	rm -rf Builds/Linux
	$(EDITOR_PATH) -batchmode -quit -logFile /tmp/$(NS)_unity_build.log -projectPath $(UNITY_PROJECT_PATH) \
		-buildLinux64Player $(UNITY_PROJECT_PATH)/Builds/Linux -executeMethod Editor.Builds.BuildLinuxHeadless \
		-silent-crashes -headless


client:
	./Builds/Linux/Client/$(NS).x86_64

server:
	./Builds/Linux/Server/$(NS).x86_64

nakama:
	#docker-compose -f Server/docker-compose-auto.yml up --build nakama
	docker-compose -f Server/docker-compose.yml up

proto:
	protoc --csharp_out=Assets/Scripts/Net/Realtime Protobuf/*.proto
	protoc --go_out=Server/modules --csharp_out=Assets/Scripts/Net/Rpc Protobuf/Rpc/*.proto


docker-build:
	# FIXME: make build always say "failed to build" (but succeed) it break the make pipeline
	# also u need to press enter -.-
	# make proto
	# make build
	docker build -t $(NS)/$(IMAGE_NAME):$(VERSION) -f Dockerfile .

docker-run:
	docker run --rm --name $(CONTAINER_NAME)-$(CONTAINER_INSTANCE) $(PORTS) $(VOLUMES) $(ENV) $(NS)/$(IMAGE_NAME):$(VERSION)

default: build