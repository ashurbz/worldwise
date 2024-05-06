import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      onClick={() => {
        navigate("form");
      }}
      style={{ color: "white" }}
    >
      <div>Lang {lng}</div>
      <div>lat {lat}</div>
    </div>
  );
};

export default Map;
