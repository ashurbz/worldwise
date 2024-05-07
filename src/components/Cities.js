import React from "react";
import City from "./City";
import { useCityContext } from "../contexts/CityProvider";
import Loader from "./Loader";

const Cities = () => {
  const { cityData, loading } = useCityContext();

  if (loading) return <Loader />;
  return (
    <div>
      {cityData?.map((city) => {
        return <City data={city} key={city.id} />;
      })}
    </div>
  );
};

export default Cities;
