import React from "react";
import { faceImage } from "..";
import Footer from "../Footer/Footer";
import NavbarInner from "../Navbar/NavbarInner";
import Seo from "../SEO/Seo";

function Error404() {
  return (
    <div className="site-wrapper overflow-hidden error404Page">
    <Seo
    title="MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business"
    description="Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands."
    keywords="WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling"
    />
    <NavbarInner />
    <main className="errorPage">
      <h1>
        4
        <span>
          <img src={faceImage} alt="age not foung"/>
        </span>
        4
      </h1>
      <h2>Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed</p>
    </main>
    <Footer />
    </div>
  );
}

export default Error404;
