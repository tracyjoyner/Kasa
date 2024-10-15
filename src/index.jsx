import React from "react";
import ReactDOM from "react-dom/client";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import PropertyCard from "./components/propertyCard/propertyCard";
import Error from "./components/error/error";
import Footer from "./components/footer/footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property-card" element={<PropertyCard />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
