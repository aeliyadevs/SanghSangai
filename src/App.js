import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PartnerCard from "./components/PartnerCard";
import SinglePage from "./pages/Blogs/SinglePage";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <BrowserRouter basename="/SanghSangai">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/singlepage" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
