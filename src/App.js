
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/css/bootstrap.css";
import "../src/css/custom.css";
import "../src/css/main.css";
import Home from './Pages/Home';
import AboutUs from "./Pages/AboutUs";
function App() {
  return (
    <Router>
      <Routes> 
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
