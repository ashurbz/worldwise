import React from "react";
import { useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div style={{ color: "white" }}>
      <div>Lang {lng}</div>
      <div>lat {lat}</div>
    </div>
  );
};

export default Map;
