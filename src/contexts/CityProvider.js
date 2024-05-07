import React, { createContext, useContext, useEffect, useState } from "react";

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cityInfo, setCityInfo] = useState({});

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const res = await fetch("http://localhost:8000/cities");
      const data = await res.json();
      setCityData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const showCity = cityData.filter((city) => {
      return city.id !== id;
    });

    setCityData(showCity);
  };
  const getInfo = async (id) => {
    const res = await fetch(`http://localhost:8000/cities/${id}`);
    const data = await res.json();
    setCityInfo(data);
  };
  console.log(cityInfo);

  return (
    <CityContext.Provider
      value={{
        cityData,
        handleDelete,
        cityInfo,
        getInfo,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

const useCityContext = () => {
  const a = useContext(CityContext);
  return a;
};

export { CityProvider, useCityContext };
