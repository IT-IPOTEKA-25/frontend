import React from "react";
import { YMaps, Map, Placemark, GeoObject } from "@pbe/react-yandex-maps";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function CustomMap() {
  const defaultState = {
    center: [53.440206, 158.632005],
    zoom: 10,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={5}>
        <YMaps>
          <Map defaultState={defaultState} width={1024} height={512}>
            <Placemark geometry={[53.440206, 158.632005]} />
            <Placemark geometry={[53.510945, 158.759296]} />
            <GeoObject
              geometry={{
                type: "LineString",
                coordinates: [
                  [53.440206, 158.632005], // кордон Пиначевский
                  [53.510945, 158.759296], // Кордон Центральный
                ],
              }}
              options={{
                geodesic: true,
                strokeWidth: 5,
                strokeColor: "#F008",
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
