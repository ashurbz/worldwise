import React from "react";
import TrackingPageNav from "./TrackingPageNav";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div>
        <TrackingPageNav />
      </div>
      <br />
      <br />
      <br />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
