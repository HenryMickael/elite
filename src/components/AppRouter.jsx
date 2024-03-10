import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erreur from "../pages/Erreur";
import Home from "../pages/Home";
import NosFormations from "../pages/NosFormations";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/NosFormations" element={<NosFormations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
