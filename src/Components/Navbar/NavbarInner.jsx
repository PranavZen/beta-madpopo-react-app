import { useEffect, useState } from "react";
import React from "react";
import { logo1 } from "../../Components/index";
// import { logo2 } from "../../Components/index";
import { Link } from "react-router-dom";
import CountrySelect from "../CountrySelect/CountrySelect";
function NavbarInner() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <header
      className={
        scroll
          ? "bgtop site-header header-with-right-menu site-header--absolute fixed-header-layout top-header-fixed white-bg light-mode-texts"
          : "bgtop site-header header-with-right-menu site-header--absolute fixed-header-layout dark-mode-texts"
      }
    >
      <div className="container-fluid pr-lg-9 pl-lg-9">
        <div className="topBarStrip">
          <div className="topInner">
            <span className="numSpan">
              <span className="textBold">
                <i className="fa fa-phone"></i> Need Help ?
              </span>{" "}
              Call Us 24/7 : <a href="tel:+91 7042407676">+91 70 42 40 7676</a>
            </span>
            <div className="inrSelectWrap">
              <div className="inrSelectBox">
                <CountrySelect />
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar site-navbar offcanvas-active
                        navbar-expand-lg px-0"
        >
          <div className="brand-logo mr-8 newBrandLogo">
            <Link to={process.env.PUBLIC_URL + "/"}>
              <img src={logo1} alt="" className="light-version-logo" />
              <img src={logo1} alt="" className="dark-version-logo" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="mobile-menu">
            <div className="navbar-nav-wrapper">
              <ul
                id="header-navbar-links"
                className="navbar-nav
                                    main-menu"
              >
                <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link dropdown-toggle coodiv-toggle-arrow"
                    id="navbarDropdown90"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hosting{" "}
                    <i className="material-symbols-outlined">
                      keyboard_arrow_down
                    </i>
                  </Link>
                  <div
                    className="coodiv-megamenu-dropdown
                                            fullwidth-megamenu center white-bg
                                            dropdown-menu d-lg-flex px-lg-10
                                            px-5 py-10"
                    aria-labelledby="navbarDropdown90"
                  >
                    <div
                      className="row
                                                justify-content-center mt-lg-6
                                                mx-0 w-100"
                    >
                      <div className="col-md-12">
                        <h1
                          className="coodiv-text-6
                                                        title
                                                        color-blackish-blue
                                                        text-lg-left text-center
                                                        w-100 d-block mb-14 dropdownMenuTitle"
                        >
                          <span className="mainTitleDrop d-block mb-2">
                            Web hosting that scales from easy to expert.
                          </span>
                          <span className="d-block mt-lg-0 mt-5 coodiv-text-11 color-blackish-blue-opacity subTitleDrop">
                            A ton of website hosting options, 99.9% uptime
                            guarantee, free SSL certificate, easy WordPress
                            installs, and a free domain for a year.
                          </span>
                        </h1>
                        <div
                          className="row
                                                        justify-content-center
                                                        mx-0"
                        >
                          <div
                            className="col-md-6
                                                            col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              to="/beta-madpopo-react-app/WordpressHosting"
                              className="feature-widget
                                                                d-sm-flex"
                            >
                              <div
                                className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0"
                              >
                                <i className="fa fa-wordpress"></i>
                              </div>
                              <div className="content">
                                <h3 className="title coodiv-text-9 mb-2 color-blackish-blue wblink">
                                  WordPress Hosting
                                </h3>
                                <p className="coodiv-text-11 color-blackish-blue-opacity mb-0 wbsubLink">
                                  Show your visitors you take security
                                  seriously.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div className="col-md-6 col-lg-3 mb-10 menusHover">
                            <Link
                              to="/beta-madpopo-react-app/WoocommerceHosting"
                              className="feature-widget d-sm-flex"
                            >
                              <div className="widget-icon text-blue mr-0 mr-lg-6 mb-7 mb-md-0">
                                <i className="fa fa-shopping-cart"></i>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue wblink"
                                >
                                  WooCommerce Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0 wbsubLink"
                                >
                                  Claim your name and get yourself online.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                            col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              to="/beta-madpopo-react-app/LinuxWebHosting"
                              className="feature-widget
                                                                d-sm-flex"
                            >
                              <div
                                className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0"
                              >
                                <i className="fa fa-linux"></i>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue wblink"
                                >
                                  Linux Web Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0 wbsubLink"
                                >
                                  Bring in all the traffic you want, we got ya.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                            col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              to="/beta-madpopo-react-app/WindowsWebHosting"
                              className="feature-widget
                                                                d-sm-flex"
                            >
                              <div
                                className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0"
                              >
                                <i className="fa fa-windows"></i>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue wblink"
                                >
                                  Windows Web Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0 wbsubLink"
                                >
                                  Bring in all the traffic you want, we got ya.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                            col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              to="/beta-madpopo-react-app/VirtualDedicatedServer"
                              className="feature-widget
                                                                d-sm-flex"
                            >
                              <div
                                className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0"
                              >
                                <i className="fa fa-cloud"></i>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue wblink"
                                >
                                  Virtual Dedicated Server
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0 wbsubLink"
                                >
                                  Bring in all the traffic you want, we got ya.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                            col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              to="/beta-madpopo-react-app/DedicatedServer"
                              className="feature-widget
                                                                d-sm-flex"
                            >
                              <div
                                className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0"
                              >
                                <i className="fa fa-server"></i>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue wblink"
                                >
                                  Dedicated Server
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0 wbsubLink"
                                >
                                  Bring in all the traffic you want, we got ya.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                            col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              to="/beta-madpopo-react-app/CloudHosting"
                              className="feature-widget
                                                                d-sm-flex"
                            >
                              <div
                                className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0"
                              >
                                <i className="fa fa-cloud"></i>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue wblink"
                                >
                                  Cloud Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0 wbsubLink"
                                >
                                  Bring in all the traffic you want, we got ya.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                            col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              to="/beta-madpopo-react-app/ResellerHosting"
                              className="feature-widget
                                                                d-sm-flex"
                            >
                              <div
                                className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0"
                              >
                                <i className="fa fa-users"></i>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue wblink"
                                >
                                  Reseller Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0 wbsubLink"
                                >
                                  Bring in all the traffic you want, we got ya.
                                </p>
                              </div>
                            </Link>
                          </div>

                          <Link
                            className="btn
                            btn-primary
                                                            coodiv-text-9
                                                            d-block w-50 "
                            to="#"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link dropdown-toggle coodiv-toggle-arrow"
                    id="domaindropdown"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Domains
                    <i className="material-symbols-outlined">
                      keyboard_arrow_down
                    </i>
                  </Link>
                  <div
                    className="coodiv-megamenu-dropdown
                                          mini-version center white-bg
                                          dropdown-menu d-lg-block pt-0"
                    aria-labelledby="domaindropdown"
                  >
                    <div
                      className="row
                                              justify-content-start
                                              mega-menu-header nav"
                      role="tablist"
                      aria-orientation="vertical"
                      id="global-network-tabs"
                    >
                      <a
                        className="toggle-domain-s-t
                                                  d-inline-block col-md-6
                                                  active-link-border pl-lg-10
                                                  pt-lg-8 pb-lg-5 pl-6 pt-4
                                                  pb-4 rounded-top-left-8 nav-link active"
                        id="global-network-country-001-tab"
                        data-toggle="pill"
                        href="#global-network-country-001"
                        role="tab"
                        aria-controls="global-network-country-001"
                        aria-selected="true"
                      >
                        <h1
                          className="coodiv-text-8
                                                      title
                                                      color-blackish-blue
                                                      text-left w-100
                                                      d-block mainTitleDrop"
                        >
                          <span>Domain Registration</span>
                          <span
                            className="d-block
                                                          coodiv-text-11
                                                          color-blackish-blue-opacity
                                                          subTitleDrop"
                          >
                            Grab a .com starting at{" "}
                            <span className="textPBold">$12.95/yr*</span>.
                          </span>
                        </h1>
                      </a>
                      <a
                        className="toggle-domain-s-t
                                                  d-md-inline-block d-none
                                                  col-md-6
                                                  active-link-border
                                                  pl-lg-10 pt-lg-8 pb-lg-5
                                                  pl-6 pt-4 pb-4
                                                  rounded-top-right-8 nav-link"
                        id="global-network-country-002-tab"
                        data-toggle="pill"
                        href="#global-network-country-002"
                        role="tab"
                        aria-controls="global-network-country-002"
                        aria-selected="false"
                      >
                        <h1
                          className="coodiv-text-8
                                                      title
                                                      color-blackish-blue
                                                      text-left w-100
                                                      d-block mainTitleDrop"
                        >
                          <span>Domain Transfer</span>
                          <span
                            className="d-block
                                                          coodiv-text-11
                                                          color-blackish-blue-opacity
                                                          subTitleDrop"
                          >
                            starting at
                            <b className="textPBold"> $5.88/yr*</b>.
                          </span>
                        </h1>
                      </a>
                    </div>
                    <div
                      className="pt-10
                                              mega-menu-body tab-content "
                      id="global-network-tabsContent"
                    >
                      <div
                        className="row
                                                  justify-content-center tab-pane fade show active"
                        id="global-network-country-001"
                        role="tabpanel"
                        aria-labelledby="global-network-country-001-tab"
                      >
                        <div
                          className="col-xl-12
                                                      col-lg-7 col-md-8
                                                      col-sm-11"
                        >
                          <div
                            className="domain-search-form
                                                          mb-8"
                          >
                            <form action="domains-registration.html">
                              <div
                                className="form-group
                                                                  position-relative
                                                                  text-lg-left
                                                                  text-center"
                              >
                                <input
                                  className="form-control
                                                                      coodiv-text-9
                                                                      border-separate
                                                                      mb-lg-6
                                                                      mb-2
                                                                      min-height-px-64"
                                  type="text"
                                  id="domain"
                                  name="domaine"
                                  placeholder="Enter
                                                                      your
                                                                      domain
                                                                      name"
                                  fdprocessedid="ie3xhm"
                                />
                                <button
                                  className="form-btn
                                                                      btn
                                                                      btn-primary
                                                                      mr-2
                                                                      coodiv-abs-md-cr
                                                                      min-height-px-50
                                                                      w-100
                                                                      w-md-auto"
                                  fdprocessedid="6zse4p"
                                >
                                  check
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="domaulListing d-flex flex-wrap pb-5">
                            <div className="col-md-6 listTitle">
                              <Link to="/beta-madpopo-react-app/Domain-Registration">
                                <p>Free with Domain Registration</p>
                                <ul className="listFeatureDomain">
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i> 2
                                      Free Email Accounts
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i>{" "}
                                      Privacy Protection
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i>{" "}
                                      Domain Theft Protection
                                    </span>
                                  </li>
                                </ul>
                              </Link>
                            </div>
                            <div className="col-md-6 listTitle">
                              <Link to="/beta-madpopo-react-app/Domain-Registration">
                                <p>Free DNS Services</p>
                                <ul className="listFeatureDomain">
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i> DNS
                                      Management
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i>{" "}
                                      Domain Forwarding
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i>{" "}
                                      Multiple Mail Forwards
                                    </span>
                                  </li>
                                </ul>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row
                                                  justify-content-center tab-pane fade"
                        id="global-network-country-002"
                        role="tabpanel"
                        aria-labelledby="global-network-country-002-tab"
                      >
                        <div
                          className="col-xl-12
                                                      col-lg-7 col-md-8
                                                      col-sm-11"
                        >
                          <div
                            className="domain-search-form
                                                          mb-8"
                          >
                            <form action="domains-registration.html">
                              <div
                                className="form-group
                                                                  position-relative
                                                                  text-lg-left
                                                                  text-center"
                              >
                                <input
                                  className="form-control
                                                                      coodiv-text-9
                                                                      border-separate
                                                                      mb-lg-6
                                                                      mb-2
                                                                      min-height-px-64"
                                  type="text"
                                  id="domain"
                                  name="domaine"
                                  placeholder="Enter
                                                                      your
                                                                      domain
                                                                      name"
                                  fdprocessedid="ie3xhm"
                                />
                                <button
                                  className="form-btn
                                                                      btn
                                                                      btn-primary
                                                                      mr-2
                                                                      coodiv-abs-md-cr
                                                                      min-height-px-50
                                                                      w-100
                                                                      w-md-auto"
                                  fdprocessedid="6zse4p"
                                >
                                  check
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="domaulListing d-flex flex-wrap pb-5">
                            <div className="col-md-6 listTitle">
                              <Link to="/beta-madpopo-react-app/Domain-Transfer">
                                <p>Free with Domain Transfer</p>
                                <ul className="listFeatureDomain">
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i> 2
                                      Free Email Accounts2
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i>{" "}
                                      Privacy Protection2
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i>{" "}
                                      Domain Theft Protection2
                                    </span>
                                  </li>
                                </ul>
                              </Link>
                            </div>
                            <div className="col-md-6 listTitle">
                              <Link to="/beta-madpopo-react-app/Domain-Transfer">
                                <p>Free DNS Services</p>
                                <ul className="listFeatureDomain">
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i> DNS
                                      Management
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i>{" "}
                                      Domain Forwarding
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="feather icon-check"></i>{" "}
                                      Multiple Mail Forwards
                                    </span>
                                  </li>
                                </ul>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link to="/beta-madpopo-react-app/Home2" className="nav-link">
                    Help Center
                  </Link>
                </li>

                {
                  //     <li className="nav-item dropdown dropdown-mega">
                  //     <Link className="nav-link dropdown-toggle coodiv-toggle-arrow"
                  //         id="navbarDropdownPages"
                  //         to="#" role="button"
                  //         data-toggle="dropdown"
                  //         aria-haspopup="true"
                  //         aria-expanded="false">Pages</Link>
                  //     <div className="bg-transparent border-0
                  //         shadow-0 coodiv-megamenu-dropdown
                  //         mini-version light-bg center
                  //         white-bg dropdown-menu d-lg-block"
                  //         aria-labelledby="navbarDropdownPages">
                  //         <div className="row
                  //             justify-content-center">
                  //             <div className="col-md-4 pr-lg-0
                  //                 mb-3 mb-lg-0">
                  //                 <h5 className="d-block py-5
                  //                     color-blackish-blue
                  //                     coodiv-text-9 pl-9 mb-0
                  //                     rounded-top-10
                  //                     coodiv-bg-gray-2-opacity-visible
                  //                     border-bottom-3-green">
                  //                     <span
                  //                         data-i18n="[html]genaral.corepages">Core
                  //                         pages</span> <span
                  //                         className="d-block
                  //                         color-blackish-blue-opacity
                  //                         coodiv-text-12 mt-n2
                  //                         font-weight-light">simple
                  //                         sub text pages</span>
                  //                 </h5>
                  //                 <ul
                  //                     className="mega-menu-dropdown-ul
                  //                     border-opacity
                  //                     border-top-0 py-6
                  //                     rounded-bottom-20
                  //                     shadow-2 white-bg">
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             to="start-vpn.html">Start
                  //                             VPN</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             to="network.html">Our
                  //                             network</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             to="index-vpn.html">index
                  //                             VPN</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             to="index-cdn.html">index
                  //                             CDN</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.aboutus"
                  //                             to="about.html">About
                  //                             Us</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.helpcentre"
                  //                             to="help-center.html">Help
                  //                             Center</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.allsupporttopics"
                  //                             to="all-topics.html">All
                  //                             Support Topics</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.serverstatus"
                  //                             to="status-page.html">Servers
                  //                             status</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.inchistory"
                  //                             to="incident-history.html">Incident
                  //                             History</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.incpost"
                  //                             to="incident-post.html">Incident
                  //                             Post</Link></li>
                  //                 </ul>
                  //             </div>
                  //             <div className="col-md-4 pr-0
                  //                 pl-lg-2 mb-3 mb-lg-0">
                  //                 <h5 className="d-block py-5
                  //                     color-blackish-blue
                  //                     coodiv-text-9 pl-9 mb-0
                  //                     rounded-top-10
                  //                     coodiv-bg-gray-2-opacity-visible
                  //                     border-bottom-3-green">
                  //                     <span
                  //                         data-i18n="[html]genaral.planspages">Plans
                  //                         pages</span> <span
                  //                         className="d-block
                  //                         color-blackish-blue-opacity
                  //                         coodiv-text-12 mt-n2
                  //                         font-weight-light">simple
                  //                         sub text pages</span>
                  //                 </h5>
                  //                 <ul
                  //                     className="mega-menu-dropdown-ul
                  //                     border-opacity
                  //                     border-top-0 py-6
                  //                     rounded-bottom-20
                  //                     shadow-2 white-bg">
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.cloudvpshosting"
                  //                             to="cloudvps-hosting.html">Cloud
                  //                             Vps Hosting</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.cpanelresslers"
                  //                             to="cpanel-reseller.html">Cpanel
                  //                             Reseller</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.dedicatedservers"
                  //                             to="dedicated-servers.html">Dedicated
                  //                             Servers</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.domainsregisteration"
                  //                             to="domains-registration.html">Domains
                  //                             Registration</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.googleworkspace"
                  //                             to="google-workspace.html">Google
                  //                             Workspace</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.minecraftservers"
                  //                             to="minecraft.html">Minecraft
                  //                             Servers</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.sharedhosting"
                  //                             to="shared-hosting.html">Shared
                  //                             Hosting</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.vpshosting"
                  //                             to="vps-hosting.html">Vps
                  //                             Hosting</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.webhosting"
                  //                             to="web-hosting.html">Web
                  //                             hosting</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.websitebluider"
                  //                             to="website-builder.html">Website
                  //                             Builder</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.wordpresshosting"
                  //                             to="wordpress-hosting.html">Wordpress
                  //                             Hosting</Link></li>
                  //                 </ul>
                  //             </div>
                  //             <div className="col-md-4 pl-lg-2">
                  //                 <h5 className="d-block py-5
                  //                     color-blackish-blue
                  //                     coodiv-text-9 pl-9 mb-0
                  //                     rounded-top-10
                  //                     coodiv-bg-gray-2-opacity-visible
                  //                     border-bottom-3-green">
                  //                     <span
                  //                         data-i18n="[html]genaral.mainpages">Main
                  //                         pages</span> <span
                  //                         className="d-block
                  //                         color-blackish-blue-opacity
                  //                         coodiv-text-12 mt-n2
                  //                         font-weight-light">simple
                  //                         sub text pages</span>
                  //                 </h5>
                  //                 <ul
                  //                     className="mega-menu-dropdown-ul
                  //                     border-opacity
                  //                     border-top-0 py-6
                  //                     rounded-bottom-20
                  //                     shadow-2 white-bg">
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.standardblog"
                  //                             to="blog.html">Standard
                  //                             Blog</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.blogstyletwo"
                  //                             to="blog-2.html">Blog
                  //                             style 2</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.blogstyletree"
                  //                             to="blog-3.html">Blog
                  //                             style 3</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.blogsingle"
                  //                             to="blog-single.html">Blog
                  //                             Single Standard</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.blogsingletwo"
                  //                             to="blog-single-2.html">Blog
                  //                             Single style 2</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.signinpage"
                  //                             to="sign-in.html">Sign-in
                  //                             Page</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.signuppage"
                  //                             to="sign-up.html">Sign-up
                  //                             Page</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             data-i18n="[html]menu.forgetpass"
                  //                             to="forget-password.html">Forget
                  //                             Password</Link></li>
                  //                     <li
                  //                         className="drop-menu-item"><Link
                  //                             to="/contact">Contact
                  //                             Us</Link></li>
                  //                 </ul>
                  //             </div>
                  //         </div>
                  //     </div>
                  // </li>
                }

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle coodiv-toggle-arrow"
                    id="navbarDropdownHelp"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About Us{" "}
                    <i className="material-symbols-outlined">
                      keyboard_arrow_down
                    </i>
                  </Link>
                  <ul
                    className="coodiv-megamenu-dropdown
                    mini-version center white-bg
                    dropdown-menu d-flex flex-wrap abtMenu"
                    aria-labelledby="navbarDropdownHelp"
                  >
                    <h1 className="coodiv-text-6 title color-blackish-blue text-lg-left text-center w-100 d-block mb-12 dropdownMenuTitle">
                      <span className="mainTitleDrop">About us</span>
                      <span className="d-block about-our-storymt-lg-0 mt-5 coodiv-text-11 color-blackish-blue-opacity subTitleDrop">
                        A ton of website hosting options, 99.9% uptime
                        guarantee, free SSL certificate, easy WordPress
                        installs, and a free domain for a year.
                      </span>
                    </h1>
                    <div className="col-md-4 abtMenuList">
                      <li className="drop-menu-item">
                        <Link to="/beta-madpopo-react-app/Global-Infrastructure">
                          Global infrastructure
                        </Link>
                      </li>
                      <li className="drop-menu-item">
                        <Link to="#">Company Blog</Link>
                      </li>
                    </div>
                    <div className="col-md-4 abtMenuList">
                      <li className="drop-menu-item">
                        <Link to="/beta-madpopo-react-app/Terms-Condition">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="drop-menu-item">
                        <Link to="#">Careers</Link>
                      </li>
                    </div>
                    <div className="col-md-4 abtMenuList">
                      <li className="drop-menu-item">
                        <Link to="#">Happy Customers</Link>
                      </li>
                      <li className="drop-menu-item">
                        <Link to="/beta-madpopo-react-app/Contact-Us">
                          Contact
                        </Link>
                      </li>
                    </div>
                    {
                      // <li className="drop-menu-item">
                      //   <Link to="#">Submit a ticket</Link>
                      // </li>
                    }
                    {
                      //     <li className="drop-menu-item dropdown">
                      //     <Link className="dropdown-toggle
                      //         gr-toggle-arrow"
                      //         id="navbarDropdownSub"
                      //         to="#" role="button"
                      //         data-toggle="dropdown"
                      //         aria-haspopup="true"
                      //         aria-expanded="false">Servers
                      //         status</Link>
                      //     <ul className="coodiv-menu-dropdown
                      //         dropdown-menu"
                      //         aria-labelledby="navbarDropdownSub">
                      //         <li className="drop-menu-item"><Link
                      //                 data-i18n="[html]menu.statuspage"
                      //                 to="status-page.html">Status
                      //                 Page</Link></li>
                      //         <li className="drop-menu-item"><Link
                      //                 data-i18n="[html]menu.inchistory"
                      //                 to="incident-history.html">Incident
                      //                 History</Link></li>
                      //         <li className="drop-menu-item"><Link
                      //                 data-i18n="[html]menu.incpost"
                      //                 to="incident-post.html">Incident
                      //                 Post</Link></li>
                      //     </ul>
                      // </li>
                    }
                    {
                      // <li className="drop-menu-item dropdown">
                      //     <Link data-i18n="[html]menu.blog"
                      //         className="dropdown-toggle
                      //         gr-toggle-arrow"
                      //         id="navbarDropdownSubBlog"
                      //         to="#" role="button"
                      //         data-toggle="dropdown"
                      //         aria-haspopup="true"
                      //         aria-expanded="false">Blog</Link>
                      //     <ul className="coodiv-menu-dropdown
                      //         dropdown-menu"
                      //         aria-labelledby="navbarDropdownSubBlog">
                      //         <li className="drop-menu-item"><Link
                      //                 data-i18n="[html]menu.standardblog"
                      //                 to="blog.html">Standard
                      //                 Blog</Link></li>
                      //         <li className="drop-menu-item"><Link
                      //                 data-i18n="[html]menu.blogstyletwo"
                      //                 to="blog-2.html">Blog
                      //                 style 2</Link></li>
                      //         <li className="drop-menu-item"><Link
                      //                 data-i18n="[html]menu.blogstyletree"
                      //                 to="blog-3.html">Blog
                      //                 style 3</Link></li>
                      //         <li className="drop-menu-item"><Link
                      //                 data-i18n="[html]menu.blogsingle"
                      //                 to="blog-single.html">Blog
                      //                 Single Standard</Link></li>
                      //         <li className="drop-menu-item"><Link
                      //                 data-i18n="[html]menu.blogsingletwo"
                      //                 to="blog-single-2.html">Blog
                      //                 Single style 2</Link></li>
                      //     </ul>
                      // </li>
                    }
                  </ul>
                </li>

                {
                  //     <li className="nav-item">
                  //      <Link
                  //         className="nav-link" to="/about"
                  //         role="button" aria-expanded="false">About
                  //         Us</Link>
                  // </li>
                }
              </ul>
            </div>
          </div>

          <div
            className="header-btn ml-auto ml-lg-5 d-none
                            d-xs-block position-relative"
          >
            <Link
              to=""
              className="btn
                                headLoginBtn coodiv-text-9"
            >
              Login
            </Link>
          </div>

          <button
            className="navbar-toggler btn-close-off-canvas
                            hamburger-icon border-0 collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="hamburger hamburger--squeeze
                                js-hamburger"
            >
              <span className="hamburger-box">
                <i className="feather icon-menu"></i>
                <i className="feather icon-x"></i>
              </span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavbarInner;
