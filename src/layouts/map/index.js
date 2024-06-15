import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function CustomMap() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <YMaps>
          <Map defaultState={defaultState}>
            <Placemark geometry={[55.684758, 37.738521]} />
          </Map>
        </YMaps>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CustomMap;
