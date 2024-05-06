import React from "react";
import { Link } from "react-router-dom";

const City = ({ data, handleDelete }) => {
  const date = new Date(data.date);
  const formattedDate = date.toDateString();

  const onDelete = (id) => {
    handleDelete(id);
  };

  return (
    <div>
      <Link to={`${data.id}?lat=${data.position.lat}&lng=${data.position.lng}`}>
        <div
          style={{
            display: "flex",
            padding: "20px",
            margin: "20px",
            justifyContent: "space-around",
            width: "100%",
            color: "white",
            backgroundColor: "darkgray",
          }}
        >
          <div>
            <span
              style={{
                padding: "20px",
              }}
            >
              {data.emoji}
            </span>
            <span>{data.cityName}</span>
          </div>
          <div>
            <span
              style={{
                padding: "20px",
              }}
            >
              {formattedDate}
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                onDelete(data.id);
              }}
            >
              ❌
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default City;
