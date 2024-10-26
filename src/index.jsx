import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import AccommodationDetailPage from "./pages/accommodations/AccommodationDetailPage";
import Error from "./pages/error/ErrorPage";
import Footer from "./components/footer/Footer";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/accommodations/:id"
          element={<AccommodationDetailPage />}
        />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
