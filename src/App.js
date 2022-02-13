import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/detail";
import MarketPlace from "./pages/marketplace";
import Profile from "./pages/profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="marketplace" element={<MarketPlace />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
