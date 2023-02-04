import React from "react";
import { footerPose1, wpFeatureImg1 } from "../Components";
import Footer from "../Components/Footer/Footer";
import Hostareawrap from "../Components/HostingArea/Hostareawrap";
import Navbar from "../Components/Navbar/Navbar";

function Globalinfrastructure() {
  return (
    <div className="site-wrapper overflow-hidden ">
      <Navbar />

      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>Global Infrastructure</h1>
            </div>
            <p className="coodiv-text-9 mb-12 btnDescTetx">
              When it comes to your online presence, speed is king. Our data
              centers provide the physical environment nessessary to keep your
              servers up and running 24X7X365 guaranteed. That’s why we’ve built
              our global infrastructure to deliver top speeds. Because we own
              the network, infrastructure and facility on which your servers
              run, we can guarantee flexibility, reliability, security and
              redundancy for your digital assets. We have 6 data centers in 6
              regions including India, UAE, Singapore, United States, Luxemburg,
              Germany, and United Kingdom
            </p>
          </div>
        </div>
        <Hostareawrap />
        <div className="gb_infraBoxSection">
          <div className="container">
            <div className="gb_infraBoxTitle">
              <h5 className="gb_infraTitle">MadPopo Global Infrastructure</h5>
              <p>
                The most secure, extensive, and reliable Global Cloud
                Infrastructure, for all your applications
              </p>
            </div>
            <div className="gb_infraBoxWrapper">
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <img src={wpFeatureImg1} alt="Optimized Technology" />
                  </div>
                  <h5>31 Launched Regions</h5>
                  <p>
                    Whether you want speed, simplicity, space, or super-power,
                    we’ve got you covered.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <img src={wpFeatureImg1} alt="Optimized Technology" />
                  </div>
                  <h5>31 Launched Regions</h5>
                  <p>
                    Whether you want speed, simplicity, space, or super-power,
                    we’ve got you covered.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <img src={wpFeatureImg1} alt="Optimized Technology" />
                  </div>
                  <h5>31 Launched Regions</h5>
                  <p>
                    Whether you want speed, simplicity, space, or super-power,
                    we’ve got you covered.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <img src={wpFeatureImg1} alt="Optimized Technology" />
                  </div>
                  <h5>31 Launched Regions</h5>
                  <p>
                    Whether you want speed, simplicity, space, or super-power,
                    we’ve got you covered.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <img src={wpFeatureImg1} alt="Optimized Technology" />
                  </div>
                  <h5>31 Launched Regions</h5>
                  <p>
                    Whether you want speed, simplicity, space, or super-power,
                    we’ve got you covered.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <img src={wpFeatureImg1} alt="Optimized Technology" />
                  </div>
                  <h5>31 Launched Regions</h5>
                  <p>
                    Whether you want speed, simplicity, space, or super-power,
                    we’ve got you covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gb_infraDataSection">
          <div className="container">
            <div className="gb_infraDataWrapper">
              <h6 className="gb_infraDataTitle">Data Center Environment</h6>
              <p>
                An optimized IT infrastructure goes hand-in-hand with
                environmental sustainability for Infinite Technologies' data
                centers. A significant reduction in CO2 emissions and the use of
                sustainable energy can support the reduction of the greenhouse
                effect. The green reveloution for Infinite Technologies means
                that we are continually striving to maintain or reduce our
                carbon footprint. The sustainable solutions we have implemented
                to do so are certified, assuring customers that our
                environmental results are proven and officially verified.
                Infinite Technologies' data center has received global
                recognition for the superior environmental features of its
                datacenter.
              </p>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>

      <div className="wp_hostingFaqSection">
        <div className="pose_1">
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

export default Globalinfrastructure;
