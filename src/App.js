import Header from "./components/Header";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/PricingPage";
import SigninPage from "./pages/SigninPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="product" element={<ProductPage />}></Route>
          <Route path="pricing" element={<PricingPage />}></Route>
          <Route path="sign-in" element={<SigninPage />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
