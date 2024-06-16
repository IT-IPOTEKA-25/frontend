import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark, GeoObject } from "@pbe/react-yandex-maps";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import KamchatkaComponent from "KamchatkaComponent";

import { KamchatkaServiceClient } from "proto/kamchatka_grpc_web_pb";
import {
  GetRouteCoordinatesRequest,
  GetRouteCoordinatesResponse,
  Coordinate,
} from "proto/kamchatka_pb";

function CustomMap() {
  const [placemarks, setPlacemarks] = useState([]);
  const [coords, setCoords] = useState([]);
  const [defaultState, setDefaultState] = useState({
    center: [53.440206, 158.632005],
    zoom: 11,
  });

  useEffect(() => {
    fetchRouteCoordinates();
  }, []);

  const fetchRouteCoordinates = () => {
    const client = new KamchatkaServiceClient("http://localhost:8080", null, null);
    const request = new GetRouteCoordinatesRequest();
    request.setId(1);

    client.getRouteCoordinates(request, {}, (err, response) => {
      if (err) {
        console.error("!Error fetching route coordinates:", err.message);
      } else {
        const coordinatesList = response.getCoordinatesList();
        const coords = [];
        coordinatesList.forEach((elem) => coords.push(elem.getDotList()));
        const placemarks = coordinatesList.map((coordinate) => ({
          geometry: coordinate.getDotList(),
          properties: {
            hintContent: coordinate.getName(),
            balloonContent: coordinate.getName(),
          },
          options: {
            preset: "islands#blueCircleDotIconWithCaption",
            balloonCloseButton: false,
            balloonMinWidth: 200,
            balloonMinHeight: 100,
          },
        }));

        setCoords(coords);
        setPlacemarks(placemarks);
      }
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <KamchatkaComponent /> */}
      Антропогенная нагрузка по маршрутам
      <MDBox mb={5}>
        <YMaps>
          <Map defaultState={defaultState} width={1024} height={512}>
            {placemarks.map((placemark, index) => (
              <Placemark
                key={index}
                geometry={placemark.geometry}
                properties={placemark.properties}
              />
            ))}
            <GeoObject
              geometry={{
                type: "LineString",
                coordinates: coords,
              }}
              options={{
                geodesic: true,
                strokeWidth: 5,
                strokeColor: "#FА08",
              }}
            />
          </Map>
        </YMaps>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CustomMap;
