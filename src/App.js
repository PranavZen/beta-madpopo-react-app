
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
import DemoPage from "./Pages/HostingPages/DemoPage";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Router>
    <ScrollToTop/>
      <Routes> 
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}/>
        <Route path="beta-madpopo-react-app/WordpressHosting" element={<WordpressHosting />}/>
        <Route path="beta-madpopo-react-app/WoocommerceHosting" element={<WoocommerceHosting />}/>
        <Route path="beta-madpopo-react-app/LinuxWebHosting" element={<LinuxWebHosting />}/>
        <Route path="beta-madpopo-react-app/WindowsWebHosting" element={<WindowsWebHosting />}/>
        <Route path="beta-madpopo-react-app/VirtualDedicatedServer" element={<VirtualDedicatedServer />}/>
        <Route path="beta-madpopo-react-app/DedicatedServer" element={<DedicatedServer />}/>
        <Route path="beta-madpopo-react-app/BusinessHosting" element={<BusinessHosting />}/>
        <Route path="beta-madpopo-react-app/ResellerHosting" element={<ResellerHosting />}/>
        <Route path="beta-madpopo-react-app/Home2" element={<Home2 />}/>
        <Route path="beta-madpopo-react-app/Terms-Condition" element={<TermsCondition />}/>
        <Route path="beta-madpopo-react-app/Global-Infrastructure" element={<Globalinfrastructure />}/>
        <Route path="beta-madpopo-react-app/Contact-Us" element={<ContactUs />}/>
        <Route path="beta-madpopo-react-app/Domain-Registration" element={<DomainRegistration />}/>
        <Route path="beta-madpopo-react-app/Domain-Transfer" element={<DomainTransfer />}/>
        <Route path="beta-madpopo-react-app/Test" element={<DemoPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
