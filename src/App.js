import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./HomePage/HomePage"; // Your main homepage component
import Aboutus from "./Aboutus/Aboutus";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}
