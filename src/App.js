import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PartnerCard from "./components/PartnerCard";

function App() {
  return (
    <>
      <BrowserRouter basename="/SanghSangai">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<PartnerCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
