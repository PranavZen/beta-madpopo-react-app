import React from "react";
import Banner from "../Components/Banner/Banner";
import FAQ from "../Components/FAQs/FAQ";

import Footer from "../Components/Footer/Footer";
import Hostareawrap from "../Components/HostingArea/Hostareawrap";
import Migration from "../Components/Migration";
import NavbarInner from "../Components/Navbar/NavbarInner";
import SyncMain from "../Components/SyncSlider/SyncMain";

import MaximizeSection from "../Components/MaximizeSection";
import DomainSection from "../Components/DomainSection";
import Seo from "../Components/SEO/Seo";
import TrustedClientsSlide from "../Components/WordpressHostingPageComponent/TrustedClients/TrustedClientsSlide";
function Home() {
  return (
    <div className="site-wrapper overflow-hidden">
    <Seo
    title="MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business"
    description="Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands."
    keywords="WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling"
    />
      <NavbarInner />
      <Banner />
      <Migration />
      <SyncMain />
      <DomainSection />
      <MaximizeSection />
      <Hostareawrap />
      <div
        className="trusedPlanSection"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <TrustedClientsSlide />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
