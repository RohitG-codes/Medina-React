import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/contact";
import Appointment from "./components/appointment";
import Footer from "./components/footer";
import Team from "./components/team";
import Timetable from "./components/timetable";
import Navblog from "./components/nav-blog";
import Department from "./components/department";
import Gallery from "./components/gallery";
import Navservice from "./components/nav-service";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/navservice" element={<Navservice />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/navblog" element={<Navblog />} />
          <Route path="/department" element={<Department />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
