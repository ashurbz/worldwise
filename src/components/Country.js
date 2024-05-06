import React from "react";

const Country = ({ el }) => {
  return (
    <div
      style={{
        color: "white",
        padding: "10px",
        margin: "20px",
        fontWeight: "bolder",
        fontSize: "larger",
        backgroundColor: "black",
      }}
    >
      <div>{}</div>
      <div>{el.country}</div>
    </div>
  );
};

export default Country;
