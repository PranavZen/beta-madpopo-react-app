
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
        <Route path={process.env.PUBLIC_URL + '/WordpressHosting'} element={<WordpressHosting />}/>
        <Route path={process.env.PUBLIC_URL + '/WoocommerceHosting'} element={<WoocommerceHosting />}/>
        <Route path={process.env.PUBLIC_URL + '/LinuxWebHosting'} element={<LinuxWebHosting />}/>
        <Route path={process.env.PUBLIC_URL + '/WindowsWebHosting'} element={<WindowsWebHosting />}/>
        <Route path={process.env.PUBLIC_URL + '/VirtualDedicatedServer'} element={<VirtualDedicatedServer />}/>
        <Route path={process.env.PUBLIC_URL + '/DedicatedServer'} element={<DedicatedServer />}/>
        <Route path={process.env.PUBLIC_URL + '/CloudHosting'} element={<CloudHosting />}/>
        <Route path={process.env.PUBLIC_URL + '/ResellerHosting'} element={<ResellerHosting />}/>
      </Routes>
    </Router>
  );
}

export default App;
