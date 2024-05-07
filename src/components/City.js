import React from "react";
import { Link } from "react-router-dom";
import { useCityContext } from "../contexts/CityProvider";

const City = ({ data }) => {
  const { handleDelete } = useCityContext();
  const date = new Date(data.date);
  const formattedDate = date.toDateString();

  const onDelete = (id) => {
    handleDelete(id);
  };

  return (
    <div>
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
        <Link
          to={`${data.id}?lat=${data.position.lat}&lng=${data.position.lng}`}
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
        </Link>
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
    </div>
  );
};

export default City;
