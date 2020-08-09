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

var github_com_louis030195_protometry_api_vector3_vector3_pb = require('../../../../../github.com/louis030195/protometry/api/vector3/vector3_pb.js');
goog.object.extend(proto, github_com_louis030195_protometry_api_vector3_vector3_pb);
goog.exportSymbol('proto.protometry.volume.Box', null, global);
goog.exportSymbol('proto.protometry.volume.Capsule', null, global);
goog.exportSymbol('proto.protometry.volume.Mesh', null, global);
goog.exportSymbol('proto.protometry.volume.Sphere', null, global);
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
proto.protometry.volume.Sphere = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protometry.volume.Sphere, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protometry.volume.Sphere.displayName = 'proto.protometry.volume.Sphere';
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
proto.protometry.volume.Capsule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protometry.volume.Capsule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protometry.volume.Capsule.displayName = 'proto.protometry.volume.Capsule';
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
proto.protometry.volume.Box = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protometry.volume.Box, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protometry.volume.Box.displayName = 'proto.protometry.volume.Box';
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
proto.protometry.volume.Mesh = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protometry.volume.Mesh.repeatedFields_, null);
};
goog.inherits(proto.protometry.volume.Mesh, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protometry.volume.Mesh.displayName = 'proto.protometry.volume.Mesh';
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
proto.protometry.volume.Sphere.prototype.toObject = function(opt_includeInstance) {
  return proto.protometry.volume.Sphere.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protometry.volume.Sphere} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protometry.volume.Sphere.toObject = function(includeInstance, msg) {
  var f, obj = {
    center: (f = msg.getCenter()) && github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.toObject(includeInstance, f),
    radius: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.protometry.volume.Sphere}
 */
proto.protometry.volume.Sphere.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protometry.volume.Sphere;
  return proto.protometry.volume.Sphere.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protometry.volume.Sphere} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protometry.volume.Sphere}
 */
proto.protometry.volume.Sphere.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3;
      reader.readMessage(value,github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.setCenter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRadius(value);
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
proto.protometry.volume.Sphere.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protometry.volume.Sphere.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protometry.volume.Sphere} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protometry.volume.Sphere.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCenter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional protometry.vector3.Vector3 center = 1;
 * @return {?proto.protometry.vector3.Vector3}
 */
proto.protometry.volume.Sphere.prototype.getCenter = function() {
  return /** @type{?proto.protometry.vector3.Vector3} */ (
    jspb.Message.getWrapperField(this, github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3, 1));
};


/** @param {?proto.protometry.vector3.Vector3|undefined} value */
proto.protometry.volume.Sphere.prototype.setCenter = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.protometry.volume.Sphere.prototype.clearCenter = function() {
  this.setCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protometry.volume.Sphere.prototype.hasCenter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double radius = 2;
 * @return {number}
 */
proto.protometry.volume.Sphere.prototype.getRadius = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.protometry.volume.Sphere.prototype.setRadius = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
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
proto.protometry.volume.Capsule.prototype.toObject = function(opt_includeInstance) {
  return proto.protometry.volume.Capsule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protometry.volume.Capsule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protometry.volume.Capsule.toObject = function(includeInstance, msg) {
  var f, obj = {
    center: (f = msg.getCenter()) && github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.toObject(includeInstance, f),
    width: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.protometry.volume.Capsule}
 */
proto.protometry.volume.Capsule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protometry.volume.Capsule;
  return proto.protometry.volume.Capsule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protometry.volume.Capsule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protometry.volume.Capsule}
 */
proto.protometry.volume.Capsule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3;
      reader.readMessage(value,github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.setCenter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidth(value);
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
proto.protometry.volume.Capsule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protometry.volume.Capsule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protometry.volume.Capsule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protometry.volume.Capsule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCenter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getWidth();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional protometry.vector3.Vector3 center = 1;
 * @return {?proto.protometry.vector3.Vector3}
 */
proto.protometry.volume.Capsule.prototype.getCenter = function() {
  return /** @type{?proto.protometry.vector3.Vector3} */ (
    jspb.Message.getWrapperField(this, github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3, 1));
};


/** @param {?proto.protometry.vector3.Vector3|undefined} value */
proto.protometry.volume.Capsule.prototype.setCenter = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.protometry.volume.Capsule.prototype.clearCenter = function() {
  this.setCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protometry.volume.Capsule.prototype.hasCenter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double width = 2;
 * @return {number}
 */
proto.protometry.volume.Capsule.prototype.getWidth = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.protometry.volume.Capsule.prototype.setWidth = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
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
proto.protometry.volume.Box.prototype.toObject = function(opt_includeInstance) {
  return proto.protometry.volume.Box.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protometry.volume.Box} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protometry.volume.Box.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: (f = msg.getMin()) && github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.toObject(includeInstance, f),
    max: (f = msg.getMax()) && github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.toObject(includeInstance, f)
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
 * @return {!proto.protometry.volume.Box}
 */
proto.protometry.volume.Box.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protometry.volume.Box;
  return proto.protometry.volume.Box.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protometry.volume.Box} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protometry.volume.Box}
 */
proto.protometry.volume.Box.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3;
      reader.readMessage(value,github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.setMin(value);
      break;
    case 2:
      var value = new github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3;
      reader.readMessage(value,github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.setMax(value);
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
proto.protometry.volume.Box.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protometry.volume.Box.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protometry.volume.Box} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protometry.volume.Box.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getMax();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
};


/**
 * optional protometry.vector3.Vector3 min = 1;
 * @return {?proto.protometry.vector3.Vector3}
 */
proto.protometry.volume.Box.prototype.getMin = function() {
  return /** @type{?proto.protometry.vector3.Vector3} */ (
    jspb.Message.getWrapperField(this, github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3, 1));
};


/** @param {?proto.protometry.vector3.Vector3|undefined} value */
proto.protometry.volume.Box.prototype.setMin = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.protometry.volume.Box.prototype.clearMin = function() {
  this.setMin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protometry.volume.Box.prototype.hasMin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protometry.vector3.Vector3 max = 2;
 * @return {?proto.protometry.vector3.Vector3}
 */
proto.protometry.volume.Box.prototype.getMax = function() {
  return /** @type{?proto.protometry.vector3.Vector3} */ (
    jspb.Message.getWrapperField(this, github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3, 2));
};


/** @param {?proto.protometry.vector3.Vector3|undefined} value */
proto.protometry.volume.Box.prototype.setMax = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.protometry.volume.Box.prototype.clearMax = function() {
  this.setMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protometry.volume.Box.prototype.hasMax = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protometry.volume.Mesh.repeatedFields_ = [2,3,4,5];



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
proto.protometry.volume.Mesh.prototype.toObject = function(opt_includeInstance) {
  return proto.protometry.volume.Mesh.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protometry.volume.Mesh} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protometry.volume.Mesh.toObject = function(includeInstance, msg) {
  var f, obj = {
    center: (f = msg.getCenter()) && github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.toObject(includeInstance, f),
    verticesList: jspb.Message.toObjectList(msg.getVerticesList(),
    github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.toObject, includeInstance),
    trisList: jspb.Message.getRepeatedField(msg, 3),
    normalsList: jspb.Message.toObjectList(msg.getNormalsList(),
    github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.toObject, includeInstance),
    uvsList: jspb.Message.toObjectList(msg.getUvsList(),
    github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.toObject, includeInstance)
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
 * @return {!proto.protometry.volume.Mesh}
 */
proto.protometry.volume.Mesh.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protometry.volume.Mesh;
  return proto.protometry.volume.Mesh.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protometry.volume.Mesh} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protometry.volume.Mesh}
 */
proto.protometry.volume.Mesh.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3;
      reader.readMessage(value,github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.setCenter(value);
      break;
    case 2:
      var value = new github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3;
      reader.readMessage(value,github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.addVertices(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setTrisList(value);
      break;
    case 4:
      var value = new github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3;
      reader.readMessage(value,github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.addNormals(value);
      break;
    case 5:
      var value = new github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3;
      reader.readMessage(value,github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.addUvs(value);
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
proto.protometry.volume.Mesh.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protometry.volume.Mesh.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protometry.volume.Mesh} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protometry.volume.Mesh.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCenter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getTrisList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = message.getNormalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getUvsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
};


/**
 * optional protometry.vector3.Vector3 center = 1;
 * @return {?proto.protometry.vector3.Vector3}
 */
proto.protometry.volume.Mesh.prototype.getCenter = function() {
  return /** @type{?proto.protometry.vector3.Vector3} */ (
    jspb.Message.getWrapperField(this, github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3, 1));
};


/** @param {?proto.protometry.vector3.Vector3|undefined} value */
proto.protometry.volume.Mesh.prototype.setCenter = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.protometry.volume.Mesh.prototype.clearCenter = function() {
  this.setCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protometry.volume.Mesh.prototype.hasCenter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protometry.vector3.Vector3 vertices = 2;
 * @return {!Array<!proto.protometry.vector3.Vector3>}
 */
proto.protometry.volume.Mesh.prototype.getVerticesList = function() {
  return /** @type{!Array<!proto.protometry.vector3.Vector3>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3, 2));
};


/** @param {!Array<!proto.protometry.vector3.Vector3>} value */
proto.protometry.volume.Mesh.prototype.setVerticesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protometry.vector3.Vector3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protometry.vector3.Vector3}
 */
proto.protometry.volume.Mesh.prototype.addVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protometry.vector3.Vector3, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.protometry.volume.Mesh.prototype.clearVerticesList = function() {
  this.setVerticesList([]);
};


/**
 * repeated int32 tris = 3;
 * @return {!Array<number>}
 */
proto.protometry.volume.Mesh.prototype.getTrisList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<number>} value */
proto.protometry.volume.Mesh.prototype.setTrisList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.protometry.volume.Mesh.prototype.addTris = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.protometry.volume.Mesh.prototype.clearTrisList = function() {
  this.setTrisList([]);
};


/**
 * repeated protometry.vector3.Vector3 normals = 4;
 * @return {!Array<!proto.protometry.vector3.Vector3>}
 */
proto.protometry.volume.Mesh.prototype.getNormalsList = function() {
  return /** @type{!Array<!proto.protometry.vector3.Vector3>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3, 4));
};


/** @param {!Array<!proto.protometry.vector3.Vector3>} value */
proto.protometry.volume.Mesh.prototype.setNormalsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.protometry.vector3.Vector3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protometry.vector3.Vector3}
 */
proto.protometry.volume.Mesh.prototype.addNormals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.protometry.vector3.Vector3, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.protometry.volume.Mesh.prototype.clearNormalsList = function() {
  this.setNormalsList([]);
};


/**
 * repeated protometry.vector3.Vector3 uvs = 5;
 * @return {!Array<!proto.protometry.vector3.Vector3>}
 */
proto.protometry.volume.Mesh.prototype.getUvsList = function() {
  return /** @type{!Array<!proto.protometry.vector3.Vector3>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_louis030195_protometry_api_vector3_vector3_pb.Vector3, 5));
};


/** @param {!Array<!proto.protometry.vector3.Vector3>} value */
proto.protometry.volume.Mesh.prototype.setUvsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protometry.vector3.Vector3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protometry.vector3.Vector3}
 */
proto.protometry.volume.Mesh.prototype.addUvs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protometry.vector3.Vector3, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.protometry.volume.Mesh.prototype.clearUvsList = function() {
  this.setUvsList([]);
};


goog.object.extend(exports, proto.protometry.volume);
