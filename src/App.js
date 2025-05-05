import "./app.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Providers from "./Components/Providers/Providers";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/providers" element={<Providers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
