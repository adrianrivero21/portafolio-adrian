import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import NavBarLink from "./components/NavBarLink/NavBarLink";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


const App = () => {
  

  return (
    <>

    <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />    
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
       
    </>
  );
};

export default App
