import React from "react";
import { useParams } from "react-router-dom";

const CityInfo = () => {
  const x = useParams();
  console.log(x);
  return <div></div>;
};

export default CityInfo;
