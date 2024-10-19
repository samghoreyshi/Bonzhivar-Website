import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero-grid";
import AboutUs from "./components/aboutus";
import Reconstruction from "./components/pages/reconstruction";
import Modeling from "./components/pages/modeling";
import Lighting from "./components/pages/lighting";
import UnderConstruction from "./components/pages/underconstruction";
import Contact from "./components/pages/contact";
import Preloader from "./components/preloader";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Preloader /> */}
              <Hero />
            </>
          }
        />
        <Route path="/خانه" element={<Hero />} />
        <Route path="/درباره-ما" element={<AboutUs />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/info/بازسازی-ساختمان" element={<Reconstruction />} />
        <Route path="/info/مدلسازی-رندرینگ" element={<Modeling />} />
        <Route path="/info/نورپردازی" element={<Lighting />} />
        <Route path="/در-حال-توسعه" element={<UnderConstruction />} />
        <Route path="/تماس-با-ما" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
