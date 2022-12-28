
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/css/bootstrap.css";
import "../src/css/custom.css";
import "../src/css/main.css";
import Home from './Pages/Home';  
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
