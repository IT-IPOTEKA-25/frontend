/**
 * @fileoverview gRPC-Web generated client stub for main
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.0
// source: kamchatka.proto

/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.main = require('./kamchatka_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.main.KamchatkaServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.main.KamchatkaServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.GetRouteCoordinatesRequest,
 *   !proto.main.GetRouteCoordinatesResponse>}
 */
const methodDescriptor_KamchatkaService_GetRouteCoordinates = new grpc.web.MethodDescriptor(
  '/main.KamchatkaService/GetRouteCoordinates',
  grpc.web.MethodType.UNARY,
  proto.main.GetRouteCoordinatesRequest,
  proto.main.GetRouteCoordinatesResponse,
  /**
   * @param {!proto.main.GetRouteCoordinatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.GetRouteCoordinatesResponse.deserializeBinary
);


/**
 * @param {!proto.main.GetRouteCoordinatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.main.GetRouteCoordinatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.GetRouteCoordinatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.KamchatkaServiceClient.prototype.getRouteCoordinates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.KamchatkaService/GetRouteCoordinates',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetRouteCoordinates,
      callback);
};


/**
 * @param {!proto.main.GetRouteCoordinatesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.GetRouteCoordinatesResponse>}
 *     Promise that resolves to the response
 */
proto.main.KamchatkaServicePromiseClient.prototype.getRouteCoordinates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.KamchatkaService/GetRouteCoordinates',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetRouteCoordinates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.GetRecreationalCapacityRequest,
 *   !proto.main.GetRecreationalCapacityResponse>}
 */
const methodDescriptor_KamchatkaService_GetRecreationalCapacity = new grpc.web.MethodDescriptor(
  '/main.KamchatkaService/GetRecreationalCapacity',
  grpc.web.MethodType.UNARY,
  proto.main.GetRecreationalCapacityRequest,
  proto.main.GetRecreationalCapacityResponse,
  /**
   * @param {!proto.main.GetRecreationalCapacityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.GetRecreationalCapacityResponse.deserializeBinary
);


/**
 * @param {!proto.main.GetRecreationalCapacityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.main.GetRecreationalCapacityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.GetRecreationalCapacityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.KamchatkaServiceClient.prototype.getRecreationalCapacity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.KamchatkaService/GetRecreationalCapacity',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetRecreationalCapacity,
      callback);
};


/**
 * @param {!proto.main.GetRecreationalCapacityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.GetRecreationalCapacityResponse>}
 *     Promise that resolves to the response
 */
proto.main.KamchatkaServicePromiseClient.prototype.getRecreationalCapacity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.KamchatkaService/GetRecreationalCapacity',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetRecreationalCapacity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.AddAlertRequest,
 *   !proto.main.StringResultResponse>}
 */
const methodDescriptor_KamchatkaService_AddAlert = new grpc.web.MethodDescriptor(
  '/main.KamchatkaService/AddAlert',
  grpc.web.MethodType.UNARY,
  proto.main.AddAlertRequest,
  proto.main.StringResultResponse,
  /**
   * @param {!proto.main.AddAlertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.StringResultResponse.deserializeBinary
);


/**
 * @param {!proto.main.AddAlertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.main.StringResultResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.StringResultResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.KamchatkaServiceClient.prototype.addAlert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.KamchatkaService/AddAlert',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_AddAlert,
      callback);
};


/**
 * @param {!proto.main.AddAlertRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.StringResultResponse>}
 *     Promise that resolves to the response
 */
proto.main.KamchatkaServicePromiseClient.prototype.addAlert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.KamchatkaService/AddAlert',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_AddAlert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.CreateUserRequest,
 *   !proto.main.CreateUserResponse>}
 */
const methodDescriptor_KamchatkaService_CreateUser = new grpc.web.MethodDescriptor(
  '/main.KamchatkaService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.main.CreateUserRequest,
  proto.main.CreateUserResponse,
  /**
   * @param {!proto.main.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.main.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.main.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.KamchatkaServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.KamchatkaService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_CreateUser,
      callback);
};


/**
 * @param {!proto.main.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.main.KamchatkaServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.KamchatkaService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.UpdateRecreationalCapacityRequest,
 *   !proto.main.UpdateRecreationalCapacityResponse>}
 */
const methodDescriptor_KamchatkaService_UpdateRecreationalCapacity = new grpc.web.MethodDescriptor(
  '/main.KamchatkaService/UpdateRecreationalCapacity',
  grpc.web.MethodType.UNARY,
  proto.main.UpdateRecreationalCapacityRequest,
  proto.main.UpdateRecreationalCapacityResponse,
  /**
   * @param {!proto.main.UpdateRecreationalCapacityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.UpdateRecreationalCapacityResponse.deserializeBinary
);


/**
 * @param {!proto.main.UpdateRecreationalCapacityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.main.UpdateRecreationalCapacityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.UpdateRecreationalCapacityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.KamchatkaServiceClient.prototype.updateRecreationalCapacity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.KamchatkaService/UpdateRecreationalCapacity',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_UpdateRecreationalCapacity,
      callback);
};


/**
 * @param {!proto.main.UpdateRecreationalCapacityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.UpdateRecreationalCapacityResponse>}
 *     Promise that resolves to the response
 */
proto.main.KamchatkaServicePromiseClient.prototype.updateRecreationalCapacity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.KamchatkaService/UpdateRecreationalCapacity',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_UpdateRecreationalCapacity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.GetGroupsRequest,
 *   !proto.main.GetGroupsResponse>}
 */
const methodDescriptor_KamchatkaService_GetGroups = new grpc.web.MethodDescriptor(
  '/main.KamchatkaService/GetGroups',
  grpc.web.MethodType.UNARY,
  proto.main.GetGroupsRequest,
  proto.main.GetGroupsResponse,
  /**
   * @param {!proto.main.GetGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.GetGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.main.GetGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.main.GetGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.GetGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.KamchatkaServiceClient.prototype.getGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.KamchatkaService/GetGroups',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetGroups,
      callback);
};


/**
 * @param {!proto.main.GetGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.GetGroupsResponse>}
 *     Promise that resolves to the response
 */
proto.main.KamchatkaServicePromiseClient.prototype.getGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.KamchatkaService/GetGroups',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.GetGroupTerritoriesRequest,
 *   !proto.main.GetGroupTerritoriesResponse>}
 */
const methodDescriptor_KamchatkaService_GetGroupTerritories = new grpc.web.MethodDescriptor(
  '/main.KamchatkaService/GetGroupTerritories',
  grpc.web.MethodType.UNARY,
  proto.main.GetGroupTerritoriesRequest,
  proto.main.GetGroupTerritoriesResponse,
  /**
   * @param {!proto.main.GetGroupTerritoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.GetGroupTerritoriesResponse.deserializeBinary
);


/**
 * @param {!proto.main.GetGroupTerritoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.main.GetGroupTerritoriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.GetGroupTerritoriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.KamchatkaServiceClient.prototype.getGroupTerritories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.KamchatkaService/GetGroupTerritories',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetGroupTerritories,
      callback);
};


/**
 * @param {!proto.main.GetGroupTerritoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.GetGroupTerritoriesResponse>}
 *     Promise that resolves to the response
 */
proto.main.KamchatkaServicePromiseClient.prototype.getGroupTerritories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.KamchatkaService/GetGroupTerritories',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetGroupTerritories);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.GetSatelliteAlertsRequest,
 *   !proto.main.GetSatelliteAlertsResponse>}
 */
const methodDescriptor_KamchatkaService_GetSatelliteAlerts = new grpc.web.MethodDescriptor(
  '/main.KamchatkaService/GetSatelliteAlerts',
  grpc.web.MethodType.UNARY,
  proto.main.GetSatelliteAlertsRequest,
  proto.main.GetSatelliteAlertsResponse,
  /**
   * @param {!proto.main.GetSatelliteAlertsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.GetSatelliteAlertsResponse.deserializeBinary
);


/**
 * @param {!proto.main.GetSatelliteAlertsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.main.GetSatelliteAlertsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.GetSatelliteAlertsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.KamchatkaServiceClient.prototype.getSatelliteAlerts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.KamchatkaService/GetSatelliteAlerts',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetSatelliteAlerts,
      callback);
};


/**
 * @param {!proto.main.GetSatelliteAlertsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.GetSatelliteAlertsResponse>}
 *     Promise that resolves to the response
 */
proto.main.KamchatkaServicePromiseClient.prototype.getSatelliteAlerts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.KamchatkaService/GetSatelliteAlerts',
      request,
      metadata || {},
      methodDescriptor_KamchatkaService_GetSatelliteAlerts);
};


module.exports = proto.main;

