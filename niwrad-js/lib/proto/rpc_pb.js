/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.nakama.niwrad.api.rpc.CreateMatchCompletionResult', null, global);
goog.exportSymbol('proto.nakama.niwrad.api.rpc.CreateMatchRequest', null, global);
goog.exportSymbol('proto.nakama.niwrad.api.rpc.CreateMatchResponse', null, global);
goog.exportSymbol('proto.nakama.niwrad.api.rpc.StopMatchCompletionResult', null, global);
goog.exportSymbol('proto.nakama.niwrad.api.rpc.StopMatchRequest', null, global);
goog.exportSymbol('proto.nakama.niwrad.api.rpc.StopMatchResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nakama.niwrad.api.rpc.CreateMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nakama.niwrad.api.rpc.CreateMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nakama.niwrad.api.rpc.CreateMatchRequest.displayName = 'proto.nakama.niwrad.api.rpc.CreateMatchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nakama.niwrad.api.rpc.CreateMatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nakama.niwrad.api.rpc.CreateMatchResponse.displayName = 'proto.nakama.niwrad.api.rpc.CreateMatchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nakama.niwrad.api.rpc.StopMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nakama.niwrad.api.rpc.StopMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nakama.niwrad.api.rpc.StopMatchRequest.displayName = 'proto.nakama.niwrad.api.rpc.StopMatchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nakama.niwrad.api.rpc.StopMatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nakama.niwrad.api.rpc.StopMatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nakama.niwrad.api.rpc.StopMatchResponse.displayName = 'proto.nakama.niwrad.api.rpc.StopMatchResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nakama.niwrad.api.rpc.CreateMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nakama.niwrad.api.rpc.CreateMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nakama.niwrad.api.rpc.CreateMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nakama.niwrad.api.rpc.CreateMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nakama.niwrad.api.rpc.CreateMatchRequest}
 */
proto.nakama.niwrad.api.rpc.CreateMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nakama.niwrad.api.rpc.CreateMatchRequest;
  return proto.nakama.niwrad.api.rpc.CreateMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nakama.niwrad.api.rpc.CreateMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nakama.niwrad.api.rpc.CreateMatchRequest}
 */
proto.nakama.niwrad.api.rpc.CreateMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nakama.niwrad.api.rpc.CreateMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nakama.niwrad.api.rpc.CreateMatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nakama.niwrad.api.rpc.CreateMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nakama.niwrad.api.rpc.CreateMatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nakama.niwrad.api.rpc.CreateMatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nakama.niwrad.api.rpc.CreateMatchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    result: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nakama.niwrad.api.rpc.CreateMatchResponse}
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nakama.niwrad.api.rpc.CreateMatchResponse;
  return proto.nakama.niwrad.api.rpc.CreateMatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nakama.niwrad.api.rpc.CreateMatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nakama.niwrad.api.rpc.CreateMatchResponse}
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchId(value);
      break;
    case 2:
      var value = /** @type {!proto.nakama.niwrad.api.rpc.CreateMatchCompletionResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nakama.niwrad.api.rpc.CreateMatchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nakama.niwrad.api.rpc.CreateMatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string match_id = 1;
 * @return {string}
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.prototype.getMatchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.prototype.setMatchId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CreateMatchCompletionResult result = 2;
 * @return {!proto.nakama.niwrad.api.rpc.CreateMatchCompletionResult}
 */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.prototype.getResult = function() {
  return /** @type {!proto.nakama.niwrad.api.rpc.CreateMatchCompletionResult} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.nakama.niwrad.api.rpc.CreateMatchCompletionResult} value */
proto.nakama.niwrad.api.rpc.CreateMatchResponse.prototype.setResult = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nakama.niwrad.api.rpc.StopMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nakama.niwrad.api.rpc.StopMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nakama.niwrad.api.rpc.StopMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nakama.niwrad.api.rpc.StopMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nakama.niwrad.api.rpc.StopMatchRequest}
 */
proto.nakama.niwrad.api.rpc.StopMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nakama.niwrad.api.rpc.StopMatchRequest;
  return proto.nakama.niwrad.api.rpc.StopMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nakama.niwrad.api.rpc.StopMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nakama.niwrad.api.rpc.StopMatchRequest}
 */
proto.nakama.niwrad.api.rpc.StopMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nakama.niwrad.api.rpc.StopMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nakama.niwrad.api.rpc.StopMatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nakama.niwrad.api.rpc.StopMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nakama.niwrad.api.rpc.StopMatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string match_id = 1;
 * @return {string}
 */
proto.nakama.niwrad.api.rpc.StopMatchRequest.prototype.getMatchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.nakama.niwrad.api.rpc.StopMatchRequest.prototype.setMatchId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nakama.niwrad.api.rpc.StopMatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nakama.niwrad.api.rpc.StopMatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nakama.niwrad.api.rpc.StopMatchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nakama.niwrad.api.rpc.StopMatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nakama.niwrad.api.rpc.StopMatchResponse}
 */
proto.nakama.niwrad.api.rpc.StopMatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nakama.niwrad.api.rpc.StopMatchResponse;
  return proto.nakama.niwrad.api.rpc.StopMatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nakama.niwrad.api.rpc.StopMatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nakama.niwrad.api.rpc.StopMatchResponse}
 */
proto.nakama.niwrad.api.rpc.StopMatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nakama.niwrad.api.rpc.StopMatchCompletionResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nakama.niwrad.api.rpc.StopMatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nakama.niwrad.api.rpc.StopMatchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nakama.niwrad.api.rpc.StopMatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nakama.niwrad.api.rpc.StopMatchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional StopMatchCompletionResult result = 1;
 * @return {!proto.nakama.niwrad.api.rpc.StopMatchCompletionResult}
 */
proto.nakama.niwrad.api.rpc.StopMatchResponse.prototype.getResult = function() {
  return /** @type {!proto.nakama.niwrad.api.rpc.StopMatchCompletionResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.nakama.niwrad.api.rpc.StopMatchCompletionResult} value */
proto.nakama.niwrad.api.rpc.StopMatchResponse.prototype.setResult = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.nakama.niwrad.api.rpc.CreateMatchCompletionResult = {
  CREATEMATCHCOMPLETIONRESULTUNKNOWNINTERNALFAILURE: 0,
  CREATEMATCHCOMPLETIONRESULTSUCCEEDED: 1,
  CREATEMATCHCOMPLETIONRESULTUNKNOWNCLIENTFAILURE: -100,
  CREATEMATCHCOMPLETIONRESULTALREADYINMATCHOFSPECIFIEDTYPE: -99,
  CREATEMATCHCOMPLETIONRESULTALREADYCREATINGMATCH: -98,
  CREATEMATCHCOMPLETIONRESULTALREADYINMATCH: -97,
  CREATEMATCHCOMPLETIONRESULTFAILEDTOCREATEMUCROOM: -96,
  CREATEMATCHCOMPLETIONRESULTNORESPONSE: -95,
  CREATEMATCHCOMPLETIONRESULTLOGGEDOUT: -94
};

/**
 * @enum {number}
 */
proto.nakama.niwrad.api.rpc.StopMatchCompletionResult = {
  STOPSERVERCOMPLETIONRESULTUNKNOWNINTERNALFAILURE: 0,
  STOPSERVERCOMPLETIONRESULTSUCCEEDED: 1
};

goog.object.extend(exports, proto.nakama.niwrad.api.rpc);
