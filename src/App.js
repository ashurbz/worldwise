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
function App() {
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
            <Route index path="cities" element={<Cities />}></Route>
            <Route path="countries" element={<CountryList />}></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
