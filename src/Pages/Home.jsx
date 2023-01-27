import React from "react";
import Banner from "../Components/Banner/Banner";
import FAQ from "../Components/FAQs/FAQ";

import Footer from "../Components/Footer/Footer";
import Hostareawrap from "../Components/HostingArea/Hostareawrap";
import Migration from "../Components/Migration";
import NavbarInner from "../Components/Navbar/NavbarInner";
import SyncMain from "../Components/SyncSlider/SyncMain";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div className="site-wrapper overflow-hidden">
    <Outlet />
      <NavbarInner />
      <Banner />
      <Migration />
      <SyncMain />
      <Hostareawrap/>
      <FAQ/>
      <Footer />
    </div>
  );
}

export default Home;
