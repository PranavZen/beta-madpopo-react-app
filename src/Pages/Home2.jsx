import React from "react";
import Banner2 from "../Components/Banner/Banner2";
import FAQ from "../Components/FAQs/FAQ";

import Footer from "../Components/Footer/Footer";
import Hostareawrap from "../Components/HostingArea/Hostareawrap";
import Migration from "../Components/Migration";
import NavbarInner from "../Components/Navbar/NavbarInner";
import SyncMain from "../Components/SyncSlider/SyncMain";

function Home2() {
  return (
    <div className="site-wrapper overflow-hidden">
      <NavbarInner />
      <Banner2 />
      <Migration />
      <SyncMain />
      <Hostareawrap/>
      <FAQ/>
      <Footer />
    </div>
  );
}

export default Home2;
