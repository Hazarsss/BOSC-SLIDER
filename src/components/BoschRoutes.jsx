import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BoschSliderPages from "./BoschSliderPages";
import BoshPages from "./BoshPages";

function BoschRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/slider" element={<BoschSliderPages />}></Route>
      <Route path="/" element={<BoshPages />}></Route>
    </Routes>
  );
}

export default BoschRoutes;
