
import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/css/bootstrap.css";
import "../src/css/custom.css";
import "../src/css/main.css";
import "../src/css/flag.css";
import Home from './Pages/Home';
import WordpressHosting from "./Pages/HostingPages/WordpressHosting";
import WoocommerceHosting from "./Pages/HostingPages/WoocommerceHosting";
import ResellerHosting from "./Pages/HostingPages/ResellerHosting";
import DedicatedServer from "./Pages/HostingPages/DedicatedServer";
import VirtualDedicatedServer from "./Pages/HostingPages/VirtualDedicatedServer";
import WindowsWebHosting from "./Pages/HostingPages/WindowsWebHosting";
import LinuxWebHosting from "./Pages/HostingPages/LinuxWebHosting";
import Home2 from "./Pages/Home2";
import ScrollToTop from './Components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TermsCondition from "./Pages/TermsCondition";
import Globalinfrastructure from "./Pages/Globalinfrastructure";
import ContactUs from "./Pages/ContactUs";
import DomainRegistration from "./Pages/DomainRegistration";
import DomainTransfer from "./Pages/DomainTransfer";
import BusinessHosting from "./Pages/HostingPages/BusinessHosting";
import WcAsia from "./Pages/WcAsia";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Router>
    <ScrollToTop/>
      <Routes> 
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}/>
        <Route path="/WordpressHosting" element={<WordpressHosting />}/>
        <Route path="/WoocommerceHosting" element={<WoocommerceHosting />}/>
        <Route path="/LinuxWebHosting" element={<LinuxWebHosting />}/>
        <Route path="/WindowsWebHosting" element={<WindowsWebHosting />}/>
        <Route path="/VirtualDedicatedServer" element={<VirtualDedicatedServer />}/>
        <Route path="/DedicatedServer" element={<DedicatedServer />}/>
        <Route path="/BusinessHosting" element={<BusinessHosting />}/>
        <Route path="/ResellerHosting" element={<ResellerHosting />}/>
        <Route path="/Home2" element={<Home2 />}/>
        <Route path="/Terms-Condition" element={<TermsCondition />}/>
        <Route path="/Global-Infrastructure" element={<Globalinfrastructure />}/>
        <Route path="/Contact-Us" element={<ContactUs />}/>
        <Route path="/Domain-Registration" element={<DomainRegistration />}/>
        <Route path="/Domain-Transfer" element={<DomainTransfer />}/>
        <Route path="/wcasia" element={<WcAsia />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
