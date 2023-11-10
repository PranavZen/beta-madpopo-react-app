import React, { useEffect, useState } from "react";
import Seo from "../Components/SEO/Seo";
import Navbar from "../Components/Navbar/Navbar";
import {
  footerPose1,
  objImg1,
  objImg2,
  objImg3,
  objImg4,
  objImg5,
  objImg6,
  objImg7,
  objImg8,
  objImg9,
  ois1,
  ois2,
  ois3,
  ois4,
  ois5,
  ois6,
} from "../Components";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

function ObjectStorage(props) {
  const [currentTab, setCurrentTab] = useState("0");
  const tabs = [
    {
      id: 0,

      tabTitle: "Asia",
      selectBtnLink1: "#",
      selectBtnLink2: "#",
      selectBtnLink3: "#",
      selectBtnLink4: "#",
      selectBtnLink5: "#",
      selectBtnLink6: "#",
      list1: `250 GB Object Storage in Asia`,
      list2: `500 GB Object Storage in Asia`,
      list3: `1 TB Object Storage in Asia`,
      list4: `2 TB Object Storage in Asia`,
      list5: `5 TB Object Storage in Asia`,
      list6: `10 TB Object Storage in Asia`,
      price1: `3.39`,
      price2: `6.78`,
      price3: `13.56`,
      price4: `27.12`,
      price5: `67.80`,
      price6: `135.60`,
    },
    {
      id: 1,
      tabTitle: "United States",
      selectBtnLink1: "#",
      selectBtnLink2: "#",
      selectBtnLink3: "#",
      selectBtnLink4: "#",
      selectBtnLink5: "#",
      selectBtnLink6: "#",
      list1: `250 GB Object Storage in United States`,
      list2: `500 GB Object Storage in United States`,
      list3: `1 TB Object Storage in United States`,
      list4: `2 TB Object Storage in United States`,
      list5: `5 TB Object Storage in United States`,
      list6: `10 TB Object Storage in United States`,
      price1: `2.99`,
      price2: `5.98`,
      price3: `11.96`,
      price4: `23.92`,
      price5: `59.80`,
      price6: `119.60`,
    },
    {
      id: 2,
      tabTitle: "Europe",
      selectBtnLink1: "#",
      selectBtnLink2: "#",
      selectBtnLink3: "#",
      selectBtnLink4: "#",
      selectBtnLink5: "#",
      selectBtnLink6: "#",
      list1: `250 GB Object Storage in Europe`,
      list2: `500 GB Object Storage in Europe`,
      list3: `1 TB Object Storage in Europe`,
      list4: `2 TB Object Storage in Europe`,
      list5: `5 TB Object Storage in Europe`,
      list6: `10 TB Object Storage in Europe`,
      price1: `2.99`,
      price2: `5.98`,
      price3: `11.96`,
      price4: `23.92`,
      price5: `59.80`,
      price6: `119.60`,
    },
  ];
  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);

  if (selectedCountry === "₹") {
    var price1 = (tabs[currentTab].price1 * 85).toFixed(0);
    var price2 = (tabs[currentTab].price2 * 85).toFixed(0);
    var price3 = (tabs[currentTab].price3 * 85).toFixed(0);
    var price4 = (tabs[currentTab].price4 * 85).toFixed(0);
    var price5 = (tabs[currentTab].price5 * 85).toFixed(0);
    var price6 = (tabs[currentTab].price6 * 85).toFixed(0);
    var statPrice1 = (2.99 * 85).toFixed(0);
  } else if (selectedCountry === "$") {
    var price11 = tabs[currentTab].price1;
    var price12 = tabs[currentTab].price2;
    var price13 = tabs[currentTab].price3;
    var price14 = tabs[currentTab].price4;
    var price15 = tabs[currentTab].price5;
    var price16 = tabs[currentTab].price6;
    var statPrice = 2.99;
  } else if (selectedCountry === "€") {
    var price21 = (tabs[currentTab].price1 * 0.95).toFixed(0);
    var price22 = (tabs[currentTab].price2 * 0.95).toFixed(0);
    var price23 = (tabs[currentTab].price3 * 0.95).toFixed(0);
    var price24 = (tabs[currentTab].price4 * 0.95).toFixed(0);
    var price25 = (tabs[currentTab].price5 * 0.95).toFixed(0);
    var price26 = (tabs[currentTab].price6 * 0.95).toFixed(0);
    var statPrice2 = (2.99 * 0.95).toFixed(0);
  }

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
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
              <h1>Object Storage</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="objBody">
        <div className="container">
          <div className="objRow">
            <div className="col-md-7">
              <div className="obj_left">
                <div className="box_1">
                  <div className="svg-component">
                    <svg
                      width="147"
                      height="110"
                      viewBox="0 0 147 110"
                      fill="none"
                    >
                      <path
                        d="M121.935 31.5238L73.4309 54.9636L26.5167 32.2153L70.7688 10.0546C72.4629 9.08661 74.5372 9.08661 76.2312 10.0546L121.935 31.5238Z"
                        fill="#ff8726"
                      ></path>
                      <path
                        d="M110.907 24.4368L76.9572 8.49911L76.2312 10.0549L77.0955 8.56826C74.8829 7.2891 72.1171 7.2891 69.9045 8.56826L70.7688 10.0549L70.0428 8.49911L27.6921 28.62L27.5884 28.6891C25.3758 29.9683 23.9929 32.3538 23.9929 34.9121V75.1193C23.9929 77.6776 25.3758 80.0631 27.5884 81.3423L27.6921 81.4114L70.0082 101.532L70.7342 99.9765L69.8699 101.463C72.0825 102.742 74.8483 102.742 77.0609 101.463L76.1966 99.9765L76.9226 101.532L119.239 81.4114L119.377 81.3423C121.59 80.0631 122.972 77.6776 122.972 75.1193V32.1463C122.972 31.5586 122.661 31.0055 122.177 30.6943C121.659 30.3832 121.036 30.3486 120.518 30.5906L73.6037 53.1661L26.897 31.0055C26.3438 30.6943 25.6178 30.6943 25.0992 31.04C24.5461 31.3858 24.2349 32.0426 24.3386 32.6649C24.4078 33.3218 24.8226 33.8749 25.4449 34.0824L72.9123 56.6233C73.3963 56.8653 73.9148 56.8653 74.3988 56.6233L119.584 34.9121V75.1193C119.584 76.4676 118.858 77.6776 117.718 78.3345L118.582 79.8211L117.856 78.2653L75.5397 98.3862L75.4014 98.4554C74.2606 99.1122 72.8431 99.1122 71.6677 98.4554L71.5294 98.3862L29.1787 78.2653L28.4527 79.8211L29.317 78.3345C28.1761 77.6776 27.4501 76.433 27.4501 75.1193V34.8775C27.4501 33.5292 28.1761 32.3192 29.317 31.6623L28.4527 30.1757L29.1787 31.7315L71.4948 11.6106L71.6331 11.5414C72.774 10.8846 74.1914 10.8846 75.3669 11.5414L75.5052 11.6106L109.455 27.5483C110.319 27.9286 111.322 27.5483 111.737 26.7185C112.151 25.8888 111.771 24.8517 110.907 24.4368Z"
                        fill="#393F45"
                      ></path>
                    </svg>
                  </div>
                  <span className="cloud-title svelte-6ra4dv">
                    S3-Compatible Object Storage
                  </span>
                  <span className="promotion-label null svelte-ome2x5">
                    <span className="promotion-text">New</span>
                  </span>
                </div>
                <div className="hero-title object-storage svelte-6ra4dv cloud-hero-title">
                  <div className="rich-text-container  svelte-1x2fm6d">
                    <h2>
                      <b>
                        <span>
                          Object Storage at a Fraction of What Others Charge
                        </span>
                      </b>
                    </h2>
                    <h4>
                      <span>
                        Our storage is a cheap alternative with unlimited free
                        transfer to AWS S3 and other vendors. Billing is simple
                        and month-to-month at all-inclusive rate,
                      </span>
                      <span>and you can easily migrate from S3.</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="obj_right">
                <div className="hero-section-container svelte-1vrm9t9">
                  <section className="product-category-section null svelte-1xiwsy6">
                    <header className="svelte-1xiwsy6">
                      <span className="group-title null svelte-1xiwsy6">
                        Object Storage
                      </span>
                    </header>
                    <div className="stack svelte-1xiwsy6">
                      <div className="previous-price-row svelte-1xiwsy6">
                        <span className="discount svelte-1xiwsy6">New</span>
                      </div>
                      <div className="price-wrapper null svelte-1cd50a3">
                        <span className="price svelte-1cd50a3">
                          {selectedCountry
                            ? selectedCountry
                            : bydefaultCurrency}
                          {selectedCountry
                            ? statPrice1 || statPrice || statPrice2
                            : selectedCountry}{" "}
                          / 250 GB
                        </span>
                        <span className="monthly svelte-1cd50a3">/ month</span>
                      </div>
                      <div className="rich-text-container  svelte-1x2fm6d">
                        <ul>
                          <li>
                            <p>
                              <span>
                                <i className="feather icon-check-circle mr-3"></i>
                                All-Inclusive
                              </span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>
                                <i className="feather icon-check-circle mr-3"></i>
                                Redundant
                              </span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>
                                <i className="feather icon-check-circle mr-3"></i>
                                S3-Compatible API
                              </span>
                            </p>
                          </li>
                        </ul>
                        <p></p>
                      </div>
                    </div>
                    <Link
                      className="cta flat svelte-1xiwsy6"
                      data-cta-type="primary"
                      to="#"
                      id="product-object-storage-category-cta"
                      data-cy="object-storage-category"
                    >
                      Order Now
                    </Link>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="fractionCostSection">
            <h4 className="fracSectionTitle">
              Everything You Need at a Fraction of the Cost
            </h4>
            <div className="fractionWrapper">
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg1} alt="S3-Compatible API" />
                  </div>
                  <div className="fracDataBox">
                    <h4>S3-Compatible API</h4>
                    <p>
                      Our S3 API makes it easy to move your data to and from S3
                      (our API follows the well-established S3 standard). All
                      you have to do is change credentials and URLs in your
                      applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg2} alt="Always-On DDos Protection" />
                  </div>
                  <div className="fracDataBox">
                    <h4>Always-On DDos Protection</h4>
                    <p>
                      We automatically detect and mitigate DDoS attacks, so your
                      files are always protected and always available whenever
                      you need them.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg3} alt="Guaranteed Redundancy" />
                  </div>
                  <div className="fracDataBox">
                    <h4>Guaranteed Redundancy</h4>
                    <p>
                      We use triple-replication data protection to ensure
                      redundancy and security (you can always access your data
                      even if one of the redundant servers becomes
                      unresponsive). Also, our object storage runs in high
                      availability mode by default.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg4} alt="Works Well with Any Server" />
                  </div>
                  <div className="fracDataBox">
                    <h4>Works Well with Any Server</h4>
                    <p>
                      MadPopo’s object storage complements any server setup you
                      have, so you can avoid vendor lock-in and scale your
                      storage as you need. And if you need servers with the best
                      price-performance ratios, then check out our high quality
                      VPS and beefy dedicated server plans.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg5} alt="Full Control of Data Location" />
                  </div>
                  <div className="fracDataBox">
                    <h4>Full Control of Data Location</h4>
                    <p>
                      Your files and data are secured with guaranteed
                      confidentiality. You decide where you want your data
                      stored (at any of our three Object Storage Regions), and
                      you can move your files with our S3 API. Note that we will
                      never move your data to another country without your
                      explicit, written consent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg6} alt="Link Sharing" />
                  </div>
                  <div className="fracDataBox">
                    <h4>Link Sharing</h4>
                    <p>
                      You can share links to stored files and manage public
                      access to each file as needed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg7} alt="Auto-Scaling Limit" />
                  </div>
                  <div className="fracDataBox">
                    <h4>Auto-Scaling Limit</h4>
                    <p>
                      You can set caps on the max amount of monthly data growth
                      to make sure your next bill won’t surprise you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg8} alt="Web UI for Easy Management" />
                  </div>
                  <div className="fracDataBox">
                    <h4>Web UI for Easy Management</h4>
                    <p>
                      The web UI for object storage makes file and bucket
                      management easy with a few clicks and drag-and-drop
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dataWrap">
                <div className="fractionBox">
                  <div className="fractionIcon">
                    <img src={objImg9} alt="ACL Management" />
                  </div>
                  <div className="fracDataBox">
                    <h4>ACL Management</h4>
                    <p>
                      With access control list (ACL) management, you can add
                      users and set access controls to object data via web UI or
                      the MadPopo API.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trustedCountWrapper">
            <h4 className="countSectionTitle">
              Trusted by Thousands Worldwide
            </h4>
            <div className="countRow">
              <div className="col">
                <div className="h1">190</div>
                <div className="h5">Countries Served</div>
              </div>
              <div className="col">
                <div className="h1">150,000+</div>
                <div className="h5">Customers Worldwide</div>
              </div>
              <div className="col">
                <div className="h1">300,000+</div>
                <div className="h5">Servers Running</div>
              </div>
              <div className="col">
                <div className="h1">19 Years</div>
                <div className="h5">In Business</div>
              </div>
            </div>
          </div>
          <div className="storageConfigSection">
            <div className="configContainer">
              <h4 className="configTitle">
                Our Most Popular Storage Configurations
              </h4>
              <p className="configPara">
                Pick one of the plans or customize the amount of storage you
                need on a monthly basis. You only pay for each 250 GB slice you
                use (no PhD in accounting or economics needed).
              </p>
              <div className="configTabPanelWrap">
                <div className="container">
                  <div className="tabs">
                    {tabs.map((tab, i) => (
                      <button
                        key={i}
                        id={tab.id}
                        disabled={currentTab === `${tab.id}`}
                        onClick={handleTabClick}
                      >
                        {tab.tabTitle}
                      </button>
                    ))}
                  </div>
                  <div className="content">
                    {tabs.map((tab, i) => (
                      <div key={i}>
                        {currentTab === `${tab.id}` && (
                          <div className="configList">
                            <ul className="configListing">
                              <li>
                                <div className="configDesc col">
                                  <p>{tab.list1}</p>
                                </div>
                                <div className="configPrice col">
                                  <p>
                                    <span>
                                      {selectedCountry
                                        ? selectedCountry
                                        : bydefaultCurrency}
                                      {selectedCountry
                                        ? price1 || price11 || price21
                                        : selectedCountry}
                                    </span>{" "}
                                    /month
                                  </p>
                                </div>
                                <div className="configSelectBtnwrap col">
                                  <a href={tab.selectBtnLink1}>Select</a>
                                </div>
                              </li>
                              <li>
                                <div className="configDesc col">
                                  <p>{tab.list2}</p>
                                </div>
                                <div className="configPrice col">
                                  <p>
                                    <span>
                                      {selectedCountry
                                        ? selectedCountry
                                        : bydefaultCurrency}
                                      {selectedCountry
                                        ? price2 || price12 || price22
                                        : selectedCountry}
                                    </span>{" "}
                                    /month
                                  </p>
                                </div>
                                <div className="configSelectBtnwrap col">
                                  <a href={tab.selectBtnLink2}>Select</a>
                                </div>
                              </li>
                              <li>
                                <div className="configDesc col">
                                  <p>{tab.list3}</p>
                                </div>
                                <div className="configPrice col">
                                  <p>
                                    <span>
                                      {selectedCountry
                                        ? selectedCountry
                                        : bydefaultCurrency}
                                      {selectedCountry
                                        ? price3 || price13 || price23
                                        : selectedCountry}
                                    </span>{" "}
                                    /month
                                  </p>
                                </div>
                                <div className="configSelectBtnwrap col">
                                  <a href={tab.selectBtnLink3}>Select</a>
                                </div>
                              </li>
                              <li>
                                <div className="configDesc col">
                                  <p>{tab.list4}</p>
                                </div>
                                <div className="configPrice col">
                                  <p>
                                    <span>
                                      {selectedCountry
                                        ? selectedCountry
                                        : bydefaultCurrency}
                                      {selectedCountry
                                        ? price4 || price14 || price24
                                        : selectedCountry}
                                    </span>{" "}
                                    /month
                                  </p>
                                </div>
                                <div className="configSelectBtnwrap col">
                                  <a href={tab.selectBtnLink4}>Select</a>
                                </div>
                              </li>
                              <li>
                                <div className="configDesc col">
                                  <p>{tab.list5}</p>
                                </div>
                                <div className="configPrice col">
                                  <p>
                                    <span>
                                      {selectedCountry
                                        ? selectedCountry
                                        : bydefaultCurrency}
                                      {selectedCountry
                                        ? price5 || price15 || price25
                                        : selectedCountry}
                                    </span>{" "}
                                    /month
                                  </p>
                                </div>
                                <div className="configSelectBtnwrap col">
                                  <a href={tab.selectBtnLink5}>Select</a>
                                </div>
                              </li>
                              <li>
                                <div className="configDesc col">
                                  <p>{tab.list6}</p>
                                </div>
                                <div className="configPrice col">
                                  <p>
                                    <span>
                                      {selectedCountry
                                        ? selectedCountry
                                        : bydefaultCurrency}
                                      {selectedCountry
                                        ? price6 || price16 || price26
                                        : selectedCountry}
                                    </span>{" "}
                                    /month
                                  </p>
                                </div>
                                <div className="configSelectBtnwrap col">
                                  <a href={tab.selectBtnLink6}>Select</a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            //Storage Integration Section Start
          }
          <div className="osiSection">
            <h4 className="osiTitle">Object Storage Integrations</h4>
            <div className="osiWrapper">
              <div className="col-md-4">
                <div className="osiBox">
                  <div className="osiImgWrap">
                    <img src={ois1} alt="" />
                  </div>
                  <div className="osiTitleName">
                    <p>Apache Spark</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="osiBox">
                  <div className="osiImgWrap">
                    <img src={ois2} alt="" />
                  </div>
                  <div className="osiTitleName">
                    <p>Nextcloud</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="osiBox">
                  <div className="osiImgWrap">
                    <img src={ois3} alt="" />
                  </div>
                  <div className="osiTitleName">
                    <p>Rclone</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="osiBox">
                  <div className="osiImgWrap">
                    <img src={ois4} alt="" />
                  </div>
                  <div className="osiTitleName">
                    <p>Cyberduck</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="osiBox">
                  <div className="osiImgWrap">
                    <img src={ois5} alt="" />
                  </div>
                  <div className="osiTitleName">
                    <p>Velero</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="osiBox">
                  <div className="osiImgWrap">
                    <img src={ois6} alt="" />
                  </div>
                  <div className="osiTitleName">
                    <p>AWS CLI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            //Storage Integration Section End
          }
        </div>
      </section>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 helpcenterPose">
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

export default ObjectStorage;
