import React from "react";
import City from "./City";

const Cities = ({ cityData, handleDelete }) => {
  return (
    <div>
      {cityData?.map((city) => {
        return <City data={city} key={city.id} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default Cities;
