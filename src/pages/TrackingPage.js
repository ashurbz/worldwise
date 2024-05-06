import React from "react";

import SideBar from "../components/SideBar";
import Map from "../components/Map";

const TrackingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div>
        <SideBar />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default TrackingPage;
