import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Providers from "./Components/Providers/Providers";



function App() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about-1" element={<Providers />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

};

export default App;
