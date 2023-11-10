import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "../src/css/bootstrap.css";
import "../src/css/custom.css";
import "../src/css/main.css";
import "../src/css/flag.css";
import Home from "./Pages/Home";
import WordpressHosting from "./Pages/HostingPages/WordpressHosting";
import WoocommerceHosting from "./Pages/HostingPages/WoocommerceHosting";
import ResellerHosting from "./Pages/HostingPages/ResellerHosting";
import DedicatedServer from "./Pages/HostingPages/DedicatedServer";
import VirtualServer from "./Pages/HostingPages/VirtualServer";
import WindowsWebHosting from "./Pages/HostingPages/WindowsWebHosting";
import LinuxWebHosting from "./Pages/HostingPages/LinuxWebHosting";
import ScrollToTop from "./Components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import TermsCondition from "./Pages/TermsCondition";
import Globalinfrastructure from "./Pages/Globalinfrastructure";
import ContactUs from "./Pages/ContactUs";
import DomainRegistration from "./Pages/DomainRegistration";
import DomainTransfer from "./Pages/DomainTransfer";
import BusinessHosting from "./Pages/HostingPages/BusinessHosting";
import WcAsia from "./Pages/WcAsia";
import { HelmetProvider } from "react-helmet-async";
import Error404 from "./Components/404Page/Error404";
import Career from "./Pages/Career";
import Jd from "./Components/CareerPageComponent/Jd";
import HelpCenter from "./Pages/HelpCenter";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Cpanel from "./Pages/Cpanel";
import Plesk from "./Pages/Plesk";
import SslCertificate from "./Pages/SslCertificate";
import Ddos from "./Pages/Ddos";
import HappyCustomer from "./Pages/HappyCustomer";
import CoLocationServer from "./Pages/CoLocationServer";
import DsAcceptablePolicy from "./Pages/DsAcceptablePolicy";
import WhoisCheckerPage from "./Pages/WhoisCheckerPage";
import ObjectStorage from "./Pages/ObjectStorage";
import AffliatePage from "./Pages/AffliatePage";
import MarketingLandingPage from "./Pages/MarketingLandingPage";
function App() {
  const helmetContext = {};
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wordpress-hosting" element={<WordpressHosting />} />
          <Route path="/woocommerce-hosting" element={<WoocommerceHosting />} />
          <Route path="/linux-web-hosting" element={<LinuxWebHosting />} />
          <Route path="/windows-hosting" element={<WindowsWebHosting />} />
          <Route
            path="/virtual-server"
            element={<VirtualServer />}
          />
          
          <Route path="/dedicated-server" element={<DedicatedServer />} />
          <Route path="/business-email-hosting" element={<BusinessHosting />} />
          <Route path="/reseller-hosting" element={<ResellerHosting />} />

          <Route path="/terms-conditions" element={<TermsCondition />} />
          <Route
            path="/global-infrastructure"
            element={<Globalinfrastructure />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/domain-registration" element={<DomainRegistration />} />
          <Route path="/domain-transfer" element={<DomainTransfer />} />
          <Route path="/wcasia" element={<WcAsia />} />
          <Route path="/career" element={<Career />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cpanel-whm-hosting-panel" element={<Cpanel />} />
          <Route path="/plesk-hosting-panel" element={<Plesk />} />
          <Route path="/ssl-certificate" element={<SslCertificate />} />
          <Route path="/ddos-protection-data-center" element={<Ddos />} />
          <Route path="/happy-customer" element={<HappyCustomer />} />
          <Route path="/colocation-server" element={<CoLocationServer />} />
          <Route path="/dedicated-server-acceptable-use-policy" element={<DsAcceptablePolicy />} />
          <Route path="/whois-checker" element={<WhoisCheckerPage />} />
          <Route path="/object-storage" element={<ObjectStorage />} />
          <Route path="/affiliates" element={<AffliatePage />} />
          <Route path="/career/:jdUrlName" element={<Jd />} />
          <Route path="/Error404" element={<Error404 />} />
          <Route path="/landing" element={<MarketingLandingPage />} />
          <Route path="*" element={<Navigate to="/Error404" />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
