import React from "react";
import Country from "./Country";

const CountryList = ({ cityData }) => {
  const country1 = cityData.map((el) => {
    return { country: el.country, emoji: el.emoji };
  });
  console.log(country1);
  return (
    <div>
      {country1?.map((el) => {
        return <Country el={el} />;
      })}
    </div>
  );
};

export default CountryList;
