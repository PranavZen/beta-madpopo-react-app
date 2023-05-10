import React, { useEffect, useState } from "react";
import Seo from "../Components/SEO/Seo";
import Navbar from "../Components/Navbar/Navbar";
import { footerPose1 } from "../Components";
import Footer from "../Components/Footer/Footer";
import CheckerApp from "./CheckerApp";

function WhoisCheckerPage() {
  const [show, setShow] = React.useState(false);
  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);
  if (selectedCountry === "₹") {
    var acaT = (5.9 * 76.1).toFixed(0);
    var armT = (5.9 * 76.1).toFixed(0);
    var bioT = (6.5 * 76.7).toFixed(0);
    var bhaT = (6.5 * 76.7).toFixed(0);
    var vdsT = (26.1 * 76.6).toFixed(0);
  } else if (selectedCountry === "$") {
    var acaT1 = 5.9;
    var armT1 = 6.2;
    var bioT1 = 6.9;
    var bhaT1 = 6.9;
    var vdsT1 = 24.99;
  } else if (selectedCountry === "€") {
    var acaT2 = (5.9 * 0.93).toFixed(0);
    var armT2 = (5.6 * 0.93).toFixed(1);
    var bioT2 = (6 * 0.93).toFixed(0);
    var bhaT2 = (6 * 0.93).toFixed(0);
    var vdsT2 = (26 * 0.93).toFixed(0);
  }
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg careerBg">
      <Seo
        title="MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business"
        description="Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands."
        keywords="WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling"
      />
      <Navbar />
      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>WHOIS Checker</h1>
            </div>
          </div>
        </div>
      </div>
      <section id="whoisChecker">
        <div className="sectionTitle">
          <h4>WHOIS Domain Lookup</h4>
          <h2>Find out who owns a website</h2>
        </div>
        <CheckerApp />
      </section>
      <section id="pricingCardSection">
        <div className="container">
          <div className="sectionTitle">
            <h4>We are recommended plans</h4>
          </div>
          <div className="whoisCheckerPricingCardWrap">
            <div className="col-md-3">
              <div className="plansInner">
                <div className="plansDetails">
                  <h4>GeekPro</h4>
                  <p>Ideal for personal websites</p>
                </div>
                <div className="plansPrices">
                  <h5>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {selectedCountry ? acaT || acaT1 || acaT2 : selectedCountry}
                  </h5>
                  <span>per month billed annually</span>
                </div>
                <div className="plansDiscount">
                  <p>
                    Discounted from{" "}
                    <del>
                      <span>
                        {selectedCountry ? selectedCountry : bydefaultCurrency}
                      </span>
                      {(
                        (selectedCountry
                          ? acaT || acaT1 || acaT2
                          : selectedCountry) * 3
                      ).toFixed(2)}{" "}
                      / mo
                    </del>
                  </p>
                </div>
                <div className="plansBuyWrap">
                  <a href="/wordpress-hosting">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plansInner">
                <div className="plansDetails">
                  <h4>Popo Store Pro</h4>
                  <p>Ideal for personal websites</p>
                </div>
                <div className="plansPrices">
                  <h5>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {selectedCountry ? armT || armT1 || armT2 : selectedCountry}
                  </h5>
                  <span>per month billed annually</span>
                </div>
                <div className="plansDiscount">
                  <p>
                    Discounted from{" "}
                    <del>
                      <span>
                        {selectedCountry ? selectedCountry : bydefaultCurrency}
                      </span>
                      {(
                        (selectedCountry
                          ? armT || armT1 || armT2
                          : selectedCountry) * 3
                      ).toFixed(2)}{" "}
                      / mo
                    </del>
                  </p>
                </div>
                <div className="plansBuyWrap">
                  <a href="/woocommerce-hosting">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plansInner">
                <div className="plansDetails">
                  <h4>RockyPro</h4>
                  <p>Ideal for personal websites</p>
                </div>
                <div className="plansPrices">
                  <h5>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {selectedCountry ? bioT || bioT1 || bioT2 : selectedCountry}
                  </h5>
                  <span>per month billed annually</span>
                </div>
                <div className="plansDiscount">
                  <p>
                    Discounted from{" "}
                    <del>
                      <span>
                        {selectedCountry ? selectedCountry : bydefaultCurrency}
                      </span>
                      {(
                        (selectedCountry
                          ? bioT || bioT1 || bioT2
                          : selectedCountry) * 3
                      ).toFixed(2)}{" "}
                      / mo
                    </del>
                  </p>
                </div>
                <div className="plansBuyWrap">
                  <a href="/linux-web-hosting">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plansInner">
                <div className="plansDetails">
                  <h4>WinPro</h4>
                  <p>Ideal for personal websites</p>
                </div>
                <div className="plansPrices">
                  <h5>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {selectedCountry ? bhaT || bhaT1 || bhaT2 : selectedCountry}
                  </h5>
                  <span>per month billed annually</span>
                </div>
                <div className="plansDiscount">
                  <p>
                    Discounted from{" "}
                    <del>
                      <span>
                        {selectedCountry ? selectedCountry : bydefaultCurrency}
                      </span>
                      {(
                        (selectedCountry
                          ? bhaT || bhaT1 || bhaT2
                          : selectedCountry) * 3
                      ).toFixed(2)}{" "}
                      / mo
                    </del>
                  </p>
                </div>
                <div className="plansBuyWrap">
                  <a href="/windows-hosting">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plansInner">
                <div className="plansDetails">
                  <h4>PopoPro</h4>
                  <p>Ideal for personal websites</p>
                </div>
                <div className="plansPrices">
                  <h5>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {selectedCountry ? vdsT || vdsT1 || vdsT2 : selectedCountry}
                  </h5>
                  <span>per month billed annually</span>
                </div>
                <div className="plansDiscount">
                  <p>
                    Discounted from{" "}
                    <del>
                      <span>
                        {selectedCountry ? selectedCountry : bydefaultCurrency}
                      </span>
                      {(
                        (selectedCountry
                          ? vdsT || vdsT1 || vdsT2
                          : selectedCountry) * 3
                      ).toFixed(2)}{" "}
                      / mo
                    </del>
                  </p>
                </div>
                <div className="plansBuyWrap">
                  <a href="/virtual-server">Buy Now</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 whoisPose">
          <img src={footerPose1} alt="Footer Imgage" />
        </div>
        <svg className="bg-wave-box-end-z1" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="footer-gradient">
              <stop offset="0%" stopColor="#212433" />
              <stop offset="39%" stopColor="#242837" />
              <stop offset="100%" stopColor="#0e1019" />
            </linearGradient>
          </defs>
          <path
            fill="rgb(36,40,55)"
            d="M0,128L80,138.7C160,149,320,171,480,192C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </div>
  );
}

export default WhoisCheckerPage;
