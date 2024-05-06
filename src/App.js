import Header from "./components/Header";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/PricingPage";
import SigninPage from "./pages/SigninPage";
import TrackingPage from "./pages/TrackingPage";
import Cities from "./components/Cities";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import CityInfo from "./components/CityInfo";
function App() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/cities");
      const data = await res.json();
      setCityData(data);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const showCity = cityData.filter((city) => {
      return city.id !== id;
    });

    setCityData(showCity);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/sign-in" element={<SigninPage />}></Route>

          <Route path="*" element={<NotFound />}></Route>
          <Route path="/trackingPage" element={<TrackingPage />}>
            <Route
              index
              path="cities"
              element={
                <Cities cityData={cityData} handleDelete={handleDelete} />
              }
            ></Route>
            <Route path="cities/:id" element={<CityInfo />} />
            <Route
              path="countries"
              element={<CountryList cityData={cityData} />}
            ></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
