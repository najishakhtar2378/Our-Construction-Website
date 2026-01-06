import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './Components/About/About';
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Components/Services/Services";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/about" element={<About />} /> 
         <Route path="/services" element={<Services />} /> 
         <Route path="/projects" element={<Product />} /> 
         <Route path="/blog" element={<Blog />} /> 
         <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
