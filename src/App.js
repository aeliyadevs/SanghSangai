import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PartnerCard from "./components/PartnerCard";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <BrowserRouter basename="/SanghSangai">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<PartnerCard />} />
          <Route path="blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
