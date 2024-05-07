import React from "react";
import Country from "./Country";
import { useCityContext } from "../contexts/CityProvider";

const CountryList = () => {
  const { cityData } = useCityContext();
  const country1 = cityData.map((el) => {
    return { country: el.country, emoji: el.emoji };
  });

  return (
    <div>
      {country1?.map((el, index) => {
        return <Country el={el} key={index} />;
      })}
    </div>
  );
};

export default CountryList;
