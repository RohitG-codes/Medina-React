import "./App.css";
import { Routes, Route } from "react-router-dom";

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


function App() {
  return (
    <>
      <Header />

      <Routes>
      
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
      
      <Footer />
    </>
  );
}

export default App;
