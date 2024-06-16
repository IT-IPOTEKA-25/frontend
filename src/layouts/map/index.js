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
  GetGroupsRequest,
  GetGroupsResponse,
  GetGroupTerritoriesRequest,
  GetGroupTerritoriesResponse,
  Coordinate,
} from "proto/kamchatka_pb";

function CustomMap() {
  const [placemarks, setPlacemarks] = useState([]);
  const [coords, setCoords] = useState([]);
  const [groups, setGroups] = useState([]);
  const [territory, setGroupsTerritory] = useState([]);
  const [defaultState, setDefaultState] = useState({
    center: [53.440206, 158.632005],
    zoom: 10,
  });

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = () => {
    const client = new KamchatkaServiceClient("http://localhost:8080", null, null);
    const request = new GetGroupsRequest();

    client.getGroups(request, {}, (err, response) => {
      if (err) {
        console.error("!Error fetching route coordinates:", err.message);
      } else {
        const r = response.getGroupsList();
        const groups = r.map((g) => ({
          name: g.getName(),
          id: g.id,
        }));
        setGroups(groups);
        fetchRouteCoordinates();
      }
    });
  };

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

  // const fetchGroupTerritory = (group) => {
  //   const client = new KamchatkaServiceClient("http://localhost:8080", null, null);
  //   const request = new GetGroupTerritoriesRequest();
  //   request.setId(1);

  //   client.getGroupTerritories(request, {}, (err, response) => {
  //     if (err) {
  //       console.error("!Error fetching route coordinates:", err.message);
  //     } else {
  //       const r = response.array[0];
  //       const territory = r.  map((g) => ({
  //         // name: g.name,
  //         // id: g.id,
  //         // currentWorkLoad: g.currentWorkLoad,
  //         // open: g.open,
  //         id: g[0],
  //         name: g[1],
  //       }));

  //       var res = (
  //         <div>
  //           {territory}
  //           <h6>Выберите территорию:</h6>
  //         </div>
  //       );
  //       setGroupsTerritory(territory);
  //     }
  //   });
  // };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <KamchatkaComponent /> */}
      Антропогенная нагрузка по маршрутам
      <MDBox mb={5}>
        <label>
          <h6>Выберите группу маршрутов:</h6>
        </label>
        <select
          onChange={(value) => {
            //fetchGroupTerritory(value);
          }}
        >
          {groups.map((group, index) => (
            <option key={index} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
        {territory}
        <YMaps>
          <Map defaultState={defaultState} width={860} height={420}>
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
