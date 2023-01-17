
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/css/bootstrap.css";
import "../src/css/custom.css";
import "../src/css/main.css";
import "../src/css/flag.css";
import Home from './Pages/Home';
import WordpressHosting from "./Pages/HostingPages/WordpressHosting";
import WoocommerceHosting from "./Pages/HostingPages/WoocommerceHosting";
import ResellerHosting from "./Pages/HostingPages/ResellerHosting";
import CloudHosting from "./Pages/HostingPages/CloudHosting";
import DedicatedServer from "./Pages/HostingPages/DedicatedServer";
import VirtualDedicatedServer from "./Pages/HostingPages/VirtualDedicatedServer";
import WindowsWebHosting from "./Pages/HostingPages/WindowsWebHosting";
import LinuxWebHosting from "./Pages/HostingPages/LinuxWebHosting";
function App() {
  return (
    <Router>
      <Routes> 
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}/>
        <Route path="/WordpressHosting" element={<WordpressHosting />}/>
        <Route path="/WoocommerceHosting" element={<WoocommerceHosting />}/>
        <Route path="/LinuxWebHosting" element={<LinuxWebHosting />}/>
        <Route path="/WindowsWebHosting" element={<WindowsWebHosting />}/>
        <Route path="/VirtualDedicatedServer" element={<VirtualDedicatedServer />}/>
        <Route path="/DedicatedServer" element={<DedicatedServer />}/>
        <Route path="/CloudHosting" element={<CloudHosting />}/>
        <Route path="/ResellerHosting" element={<ResellerHosting />}/>
      </Routes>
    </Router>
  );
}

export default App;
