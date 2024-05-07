import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCityContext } from "../contexts/CityProvider";

const CityInfo = () => {
  const { cityInfo, getInfo } = useCityContext();
  const { id } = useParams();

  const date = new Date(cityInfo.date);
  const formattedDate = date.toDateString();

  useEffect(() => {
    getInfo(id);
  }, []);
  console.log(cityInfo);
  return (
    <div
      style={{
        color: "white",
        fontSize: "large",
        fontWeight: "bold",
        padding: "20px",
        lineHeight: "2rem",
      }}
    >
      <div>
        <p>CITY NAME</p>
        <span>{cityInfo.emoji}</span>
        <span>{cityInfo.cityName}</span>
      </div>
      <div>
        <p> {`You Went To ${cityInfo.cityName} On`} </p>
        <p>{formattedDate}</p>
      </div>
      <div>
        <p>Your Notes</p>
        <p>{cityInfo.notes}</p>
      </div>
      <div>
        <p>Learn More</p>
        <p>
          <Link
            to={`https://en.wikipedia.org/wiki/${cityInfo.cityName}`}
          >{`Check out ${cityInfo.cityName} on Wikipedia`}</Link>
        </p>
      </div>
    </div>
  );
};

export default CityInfo;
