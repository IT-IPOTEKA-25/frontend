import React, { useState } from "react";
import { KamchatkaServiceClient } from "proto/kamchatka_grpc_web_pb";

import {
  GetRouteCoordinatesRequest,
  GetRecreationalCapacityRequest,
  AddAlertRequest,
  CreateUserRequest,
  UpdateRecreationalCapacityRequest,
  GetGroupsRequest,
  GetGroupTerritoriesRequest,
} from "./proto/kamchatka_pb";

const KamchatkaComponent = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const handleGetRouteCoordinates = () => {
    const client = new KamchatkaServiceClient("http://localhost:8080", null, null);
    const request = new GetRouteCoordinatesRequest();
    request.setId(1);

    client.getRouteCoordinates(request, {}, (err, response) => {
      if (err) {
        console.error("Error:", err.message);
      } else {
        const coordinatesList = response.getCoordinatesList();
        setResponseMessage(`Coordinates: ${JSON.stringify(coordinatesList)}`);
      }
    });
  };

  const handleGetRecreationalCapacity = () => {
    const client = new KamchatkaServiceClient("http://localhost:8080", null, null);
    const request = new GetRecreationalCapacityRequest();
    request.setId(1);

    client.getRecreationalCapacity(request, {}, (err, response) => {
      if (err) {
        console.error("Error:", err.message);
      } else {
        const capacityResponse = response.toObject();
        setResponseMessage(`Recreational Capacity: ${JSON.stringify(capacityResponse)}`);
      }
    });
  };

  // Implement handlers for other RPC methods similarly

  return (
    <div>
      <h1>Kamchatka Service Demo</h1>
      <button onClick={handleGetRouteCoordinates}>Get Route Coordinates</button>
      <button onClick={handleGetRecreationalCapacity}>Get Recreational Capacity</button>
      {/* Add more buttons and UI elements for other RPC methods */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default KamchatkaComponent;
