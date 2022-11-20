import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Gallary from "./components/Gallary";
import Latestevent from "./components/Latestevent";
// import Login from './components/Login';
import Register from "./components/Register";
import StudentCouncil from "./components/StudentCouncil";
import Students from "./components/Students";
import TechTalks from "./components/TechTalks";
import Newsletter from "./components/Newsletter";
import Event from "./components/Event";
// import DashBoard from './components/DashBoard';
// import ProtectedRoute from './ProtectedRoute';
// import Logout from './components/Logout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route to path="/" element={<Home />} />
        <Route to path="/techtalks" element={<TechTalks />} />
        <Route to path="/about" element={<About />} />
        <Route to path="/services" element={<Services />} />
        <Route to path="/contact" element={<Contact />} />
        <Route to path="/gallary" element={<Gallary />} />
        <Route to path="/latestevent" element={<Latestevent />} />
        <Route to path="/studentcouncils" element={<StudentCouncil />} />
        {/* <Route  path="/login" element={<Login/>} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<Students />} />
        <Route path="/event" element={<Event />} />
        <Route path="/newsletter" element={<Newsletter />} />
        {/* <Route  path="/dashboard" element={<DashBoard/>} />
      <Route  path="/logout" element={<Logout/>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
