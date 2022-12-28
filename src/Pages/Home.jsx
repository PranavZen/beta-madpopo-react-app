import React from "react";
import Banner from "../Components/Banner/Banner";
import FAQ from "../Components/FAQs/FAQ";

import Footer from "../Components/Footer/Footer";
import Hostareawrap from "../Components/HostingArea/Hostareawrap";
import Migration from "../Components/Migration";
import Navbar from "../Components/Navbar/Navbar";
import SyncMain from "../Components/SyncSlider/SyncMain";
import MainTabSection from "../Components/Tabs/MainTabSection";

function Home() {
  return (
    <div className="site-wrapper overflow-hidden">
      <Navbar />
      <Banner />
      <Migration />
      <SyncMain />
      <MainTabSection />
      <Hostareawrap/>
      <FAQ/>
      <Footer />
    </div>
  );
}

export default Home;
