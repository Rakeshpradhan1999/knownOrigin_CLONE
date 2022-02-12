import "./App.css";
import Home from "./pages/home";
import Details from "./pages/detail";
import MarketPlace from "./pages/marketplace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="marketplace" element={<MarketPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
