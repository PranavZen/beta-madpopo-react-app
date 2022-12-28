import { useEffect, useState } from 'react';
import React from 'react';
import { logo1 } from '../../Components/index';
import { logo2 } from '../../Components/index';
import { Link } from 'react-router-dom';
function Navbar() {
    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
  return (
    <div>
    <header className={scroll ? "site-header header-with-right-menu site-header--absolute fixed-header-layout top-header-fixed white-bg light-mode-texts" : "site-header header-with-right-menu site-header--absolute fixed-header-layout dark-mode-texts"}>
                <div className="container-fluid pr-lg-9 pl-lg-9">

                    <nav className="navbar site-navbar offcanvas-active
                        navbar-expand-lg px-0">
                        <div className="brand-logo mr-8">
                                <Link to="/beta-madpopo-react-app">
                                    <img src={logo1} alt="" className="light-version-logo" />
                                    <img src={logo2} alt="" className="dark-version-logo" />
                                </Link>
                        </div>
                        <div id="languagesystem" className="header-lang dropdown
                            show position-static coodiv-z-index-1">
                            <Link className="coodiv-text-10 btn-header-lang
                                position-relative" to="#" role="button"
                                id="dropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="feather icon-globe mr-2"></i><span
                                    data-i18n="[html]systems.langname">EN</span>
                            </Link>
                            <div id="languagesystem-slector"
                                className="header-lang-container dropdown-menu px-8
                                py-7 px-lg-15 py-lg-15 overflow-scroll-y"
                                aria-labelledby="dropdownMenuLink">
                                <div className="row justify-content-between
                                    align-items-center mb-5">
                                    <div className="col-lg-4 col-md-8">
                                        <form action="">
                                            <div className="form-group
                                                position-relative mb-0">
                                                <input className="form-control
                                                    coodiv-text-9 border
                                                    min-height-px-64 rounded-20"
                                                    
                                                    id="lang-search-input"
                                                    placeholder="Please entree
                                                    your language" />
                                                <button className="btn btn-warning
                                                    mr-2 coodiv-abs-cr
                                                    btn-auto-min-width
                                                    min-height-px-50 w-100
                                                    w-md-auto rounded-20
                                                    icon-btn"><i className="feather
                                                        icon-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="white-bg border rounded-20 px-10
                                    py-10 lang-box-container">
                                    <div className="lang-box-title position-relative
                                        coodiv-text-9 d-block
                                        color-blackish-blue font-weight-bold
                                        mb-7"><span>America</span></div>
                                    <ul id="lang-box-ul" className="row
                                        justify-content-start mb-10">
                                        <li className="col-md-3">
                                             <Link to="#"
                                                data-lng="en"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center
                                                current-lang active"><i
                                                    className="img-flag english"></i>
                                                United States <small>English</small></Link></li>
                                        <li className="col-md-3">
                                        <Link to="#"
                                                data-lng="es"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag argentina"></i>
                                                Argentina <small>Español</small></Link></li>
                                        <li className="col-md-3">
                                        <Link to="#"
                                                data-lng="pt"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag brasil"></i>
                                                Brasil <small>Português</small></Link></li>
                                        <div className="lang-box-title
                                            position-relative coodiv-text-9
                                            d-block color-blackish-blue
                                            font-weight-bold mb-7 col-md-12"><span>Europe</span></div>
                                        <li className="col-md-3">
                                        <Link to="#"
                                                data-lng="po"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag polska"></i>
                                                Polska <small>Polski</small></Link></li>
                                        <li className="col-md-3">
                                        <Link to="#"
                                                data-lng="ge"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag polska"></i>
                                                Germany <small>German</small></Link></li>
                                        <li className="col-md-3">
                                        <Link to="#"
                                                data-lng="ru"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag russia"></i>
                                                Россия <small>Русский</small></Link></li>
                                        <li className="col-md-3">
                                        <Link to="#"
                                                data-lng="ar"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag arabic
                                                    algeria"></i> Algeria
                                                <small>Arabic</small></Link></li>
                                        <li className="col-md-3">
                                        <Link to="#"
                                                data-lng="ukr"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center
                                                mb-lg-0"><i className="img-flag
                                                    ukraine"></i> Україна
                                                <small>Українська</small></Link></li>
                                        <li className="col-md-3"><Link to="#"
                                                data-lng="fr"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag france"></i>
                                                France <small>Français</small></Link></li>
                                        <div className="lang-box-title
                                            position-relative coodiv-text-9
                                            d-block color-blackish-blue
                                            font-weight-bold mb-7 col-md-12"><span>Asia</span></div>
                                        <li className="col-md-3"><Link to="#"
                                                data-lng="ar"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag arabic uae"></i>
                                                UAE <small>Arabic</small></Link></li>
                                        <li className="col-md-3"><Link to="#"
                                                data-lng="en-IN"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center"><i
                                                    className="img-flag india"></i>
                                                India <small>English</small></Link></li>
                                        <li className="col-md-3"><Link to="#"
                                                data-lng="ja"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center
                                                mb-lg-0"><i className="img-flag
                                                    japan"></i> 대한민국 <small>한국어</small></Link></li>
                                        <li className="col-md-3"><Link to="#"
                                                data-lng="dan"
                                                className="lang-box-item
                                                coodiv-text-9 font-weight-bold
                                                d-flex align-items-center
                                                mb-lg-0"><i className="img-flag
                                                    danmark"></i> Danmark
                                                <small>Dansk</small></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="collapse navbar-collapse" id="mobile-menu">
                            <div className="navbar-nav-wrapper">
                                <ul id="header-navbar-links" className="navbar-nav
                                    main-menu">
                                    <li className="nav-item dropdown dropdown-mega">
                                        <Link className="nav-link dropdown-toggle
                                            coodiv-toggle-arrow"
                                            id="navbardemos" to="#demos"
                                            role="button" data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">Demos</Link>
                                        <div className="coodiv-megamenu-dropdown
                                            demos-area-megamenu
                                            fullwidth-megamenu center white-bg
                                            dropdown-menu d-lg-flex px-lg-10
                                            px-5 py-10"
                                            aria-labelledby="navbardemos">
                                            <div className="container-fluid">
                                                <div className="row
                                                    justify-content-center
                                                    mt-lg-6">
                                                    <div className="col-md-12">
                                                        <h1 className="coodiv-text-6
                                                            title
                                                            color-blackish-blue
                                                            text-lg-left
                                                            text-center w-100
                                                            d-block mb-10">
                                                            <span>Check pre-made
                                                                EMYUI Demos</span>
                                                            <span className="d-block
                                                                mt-lg-0 mt-5
                                                                coodiv-text-11
                                                                color-blackish-blue-opacity
                                                                fw-100">
                                                                Build your
                                                                project in
                                                                minutes with the
                                                                help of
                                                                countless
                                                                amazing features
                                                                and elements of
                                                                EMYUI, and start
                                                                selling your
                                                                products with
                                                                the included
                                                                WHMCS themes.
                                                            </span>
                                                        </h1>
                                                        <div className="row
                                                            justify-content-start
                                                            mega-menu-demos-group">
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-discount.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                   
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            Discount</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">WebHosting,
                                                                            reseller
                                                                            hosting,
                                                                            WordPress
                                                                            hosting</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-cloud.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                 
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            Clouds</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">WebHosting,
                                                                            reseller
                                                                            hosting,
                                                                            WordPress
                                                                            hosting</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-security.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                  
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            Security</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">WebHosting,
                                                                            reseller
                                                                            hosting,
                                                                            WordPress
                                                                            hosting</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-aws.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                    
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            AWS</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">WebHosting,
                                                                            reseller
                                                                            hosting,
                                                                            WordPress
                                                                            hosting</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                    
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            One</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">WebHosting,
                                                                            reseller
                                                                            hosting,
                                                                            WordPress
                                                                            hosting</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-2.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                  
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            two</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">WebHosting,
                                                                            reseller
                                                                            hosting,
                                                                            WordPress
                                                                            hosting</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-3.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                    
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            Three</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">WebHosting,
                                                                            reseller
                                                                            hosting,
                                                                            WordPress
                                                                            hosting</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-4.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                    
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            Four</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">for
                                                                            Domain
                                                                            Name
                                                                            Registrars
                                                                            companies</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-vpn.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                   
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            VPN</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">landing
                                                                            page
                                                                            for
                                                                            VPN
                                                                            providers</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-2
                                                                col-md-4 col-12
                                                                mb-10 px-lg-1">
                                                                <Link
                                                                    to="index-cdn.html"
                                                                    className="mega-menu-demos-item
                                                                    d-block
                                                                    light-mode-texts
                                                                    rounded-10
                                                                    overflow-hidden
                                                                    border">
                                                                   
                                                                    <div
                                                                        className="mega-menu-demos-item-body
                                                                        px-6
                                                                        py-4">
                                                                        <h6
                                                                            className="coodiv-text-10
                                                                            mt-4
                                                                            mb-1">Homepage
                                                                            CDN</h6>
                                                                        <p
                                                                            className="coodiv-text-11
                                                                            fw-100">landing
                                                                            page
                                                                            for
                                                                            CDN
                                                                            providers</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="nav-item dropdown dropdown-mega">
                                        <Link data-i18n="[html]menu.hosting"
                                            className="nav-link dropdown-toggle
                                            coodiv-toggle-arrow"
                                            id="navbarDropdown90"
                                            to="#features" role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">Hosting</Link>
                                        <div className="coodiv-megamenu-dropdown
                                            fullwidth-megamenu center white-bg
                                            dropdown-menu d-lg-flex px-lg-10
                                            px-5 py-10"
                                            aria-labelledby="navbarDropdown90">
                                            <div className="row
                                                justify-content-center mt-lg-6
                                                mx-0 w-100">
                                                <div className="col-md-8">
                                                    <h1 className="coodiv-text-6
                                                        title
                                                        color-blackish-blue
                                                        text-lg-left text-center
                                                        w-100 d-block mb-14">
                                                        <span
                                                            data-i18n="[html]genaral.webhostingfirstsentess">Web
                                                            hosting that scales
                                                            from easy to expert.</span>
                                                        <span
                                                            data-i18n="[html]genaral.webhostingfirstsentesssub"
                                                            className="d-block
                                                            mt-lg-0 mt-5
                                                            coodiv-text-11
                                                            color-blackish-blue-opacity
                                                            fw-100">A ton of
                                                            website hosting
                                                            options, 99.9%
                                                            uptime guarantee,
                                                            free SSL
                                                            certificate, easy
                                                            WordPress installs,
                                                            and a free domain
                                                            for a year.</span>
                                                    </h1>
                                                    <div className="row
                                                        justify-content-center
                                                        mx-0">
                                                        <div className="col-md-6
                                                            col-lg-4 mb-10">
                                                            <div
                                                                className="feature-widget
                                                                d-sm-flex">
                                                                <div
                                                                    className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0">
                                                                    <i
                                                                        className="feather
                                                                        icon-server"></i>
                                                                </div>
                                                                <div
                                                                    className="content">
                                                                    <h3
                                                                        data-i18n="[html]genaral.bandwidthfeatures"
                                                                        className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue">Unmetered
                                                                        bandwidth</h3>
                                                                    <p
                                                                        data-i18n="[html]genaral.bandwidthtext"
                                                                        className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0">Show
                                                                        your
                                                                        visitors
                                                                        you take
                                                                        security
                                                                        seriously.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6
                                                            col-lg-4 mb-10">
                                                            <div
                                                                className="feature-widget
                                                                d-sm-flex">
                                                                <div
                                                                    className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0">
                                                                    <i
                                                                        className="feather
                                                                        icon-globe"></i>
                                                                </div>
                                                                <div
                                                                    className="content">
                                                                    <h3
                                                                        data-i18n="[html]genaral.domainfeatures"
                                                                        className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue">Domain
                                                                        registration</h3>
                                                                    <p
                                                                        data-i18n="[html]genaral.domaintext"
                                                                        className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0">Claim
                                                                        your
                                                                        name and
                                                                        get
                                                                        yourself
                                                                        online.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6
                                                            col-lg-4 mb-10">
                                                            <div
                                                                className="feature-widget
                                                                d-sm-flex">
                                                                <div
                                                                    className="widget-icon
                                                                    text-blue
                                                                    mr-0 mr-lg-6
                                                                    mb-7
                                                                    mb-md-0">
                                                                    <i
                                                                        className="feather
                                                                        icon-shield"></i>
                                                                </div>
                                                                <div
                                                                    className="content">
                                                                    <h3
                                                                        data-i18n="[html]genaral.sslfeatures"
                                                                        className="title
                                                                        coodiv-text-9
                                                                        mb-2
                                                                        color-blackish-blue">SSL
                                                                        certificate</h3>
                                                                    <p
                                                                        data-i18n="[html]genaral.ssltext"
                                                                        className="coodiv-text-11
                                                                        color-blackish-blue-opacity
                                                                        mb-0">Bring
                                                                        in all
                                                                        the
                                                                        traffic
                                                                        you
                                                                        want, we
                                                                        got ya.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            data-i18n="[html]genaral.getstarted"
                                                            className="btn
                                                            btn-warning
                                                            coodiv-text-9
                                                            d-block w-100 mx-4
                                                            mx-lg-0"
                                                            to="web-hosting.html">Get
                                                            started now</Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="megamenu-ads
                                                        justify-content-between
                                                        pt-10 pb-6 px-10">
                                                        <h3 className="txtar
                                                            coodiv-text-6 title
                                                            mt-5">
                                                            <span
                                                                data-i18n="[html]genaral.signupforhosting">Sign
                                                                up for web
                                                                hosting today!</span>
                                                            <span
                                                                data-i18n="[html]genaral.hostingbannertext"
                                                                className="txtar
                                                                coodiv-text-11
                                                                mb-0 mt-2
                                                                d-block fw-100">A
                                                                ton of website
                                                                hosting options,
                                                                99.9% uptime
                                                                guarantee start
                                                                only at.</span>
                                                            <span className="txtar
                                                                megamenu-ads-price
                                                                mt-8 d-block">$2.75/mo*</span>
                                                        </h3>
                                                        <Link
                                                            data-i18n="[html]genaral.getstartedfree"
                                                            className="btn btn-red
                                                            coodiv-text-9 txtar"
                                                            to="shared-hosting.html">Get
                                                            started free</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="nav-item dropdown dropdown-mega">
                                        <Link data-i18n="[html]menu.prohosting"
                                            className="nav-link dropdown-toggle
                                            coodiv-toggle-arrow"
                                            id="navbarDropdown120"
                                            to="#prohisting" role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">Pro Hosting</Link>
                                        <div className="coodiv-megamenu-dropdown
                                            center white-bg dropdown-menu
                                            d-lg-block px-10 py-10"
                                            aria-labelledby="navbarDropdown120">
                                            <div className="row
                                                justify-content-center">
                                                <div className="col-md-12">
                                                    <h1 className="coodiv-text-6
                                                        title
                                                        color-blackish-blue
                                                        text-left w-100 d-block
                                                        mb-10">
                                                        <span
                                                            data-i18n="[html]genaral.prohosingtitle">Hosting
                                                            for every website.</span>
                                                        <span
                                                            data-i18n="[html]genaral.prohosingsubtitle"
                                                            className="d-block
                                                            coodiv-text-11
                                                            color-blackish-blue-opacity
                                                            fw-100">Unlimited
                                                            storage, unmetered
                                                            bandwidth,
                                                            unbeatable hosting.
                                                            This gator’s got ya
                                                            covered.</span>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="row
                                                justify-content-start
                                                hostings-card-group">
                                                <div className="col-lg-6 col-md-6
                                                    col-sm-6 col-xs-8 mb-md-12
                                                    mb-lg-6 mb-3
                                                    hostings-card-items">
                                                    <Link
                                                        to="wordpress-hosting.html"
                                                        className="hostings-card
                                                        d-flex flex-column
                                                        align-items-center
                                                        flex-md-row
                                                        border-separate
                                                        position-relative
                                                        rounded-10 px-6 py-8
                                                        overflow-hidden">
                                                        <span
                                                            className="hostings-card-off">15%
                                                            off!</span>
                                                        <div className="card-icon
                                                            d-flex mr-lg-7 mb-9
                                                            mb-lg-0">
                                                            <i className="fab
                                                                fa-wordpress"></i>
                                                        </div>
                                                        <div className="card-texts
                                                            pr-xl-10">
                                                            <h3
                                                                data-i18n="[html]genaral.prohosingwordpress"
                                                                className="coodiv-text-10
                                                                mb-1
                                                                coodiv-text-exerpt
                                                                color-blackish-blue">Wordpress
                                                                Hosting</h3>
                                                            <p
                                                                data-i18n="[html]genaral.prohosingboxsubtetileone"
                                                                className="coodiv-text-11
                                                                fw-100 mb-0
                                                                color-blackish-blue-opacity">Unlimited
                                                                storage,
                                                                unmetered
                                                                bandwidth.</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-6
                                                    col-sm-6 col-xs-8 mb-md-12
                                                    mb-lg-6 mb-3
                                                    hostings-card-items">
                                                    <Link to="web-hosting.html"
                                                        className="hostings-card
                                                        d-flex flex-column
                                                        align-items-center
                                                        flex-md-row
                                                        border-separate
                                                        position-relative
                                                        rounded-10 px-6 py-8
                                                        overflow-hidden">
                                                        <span
                                                            className="hostings-card-off">25%
                                                            off!</span>
                                                        <div className="card-icon
                                                            d-flex mr-lg-7 mb-9
                                                            mb-lg-0">
                                                            <i className="fas
                                                                fa-server"></i>
                                                        </div>
                                                        <div className="card-texts
                                                            pr-xl-10">
                                                            <h3
                                                                data-i18n="[html]genaral.prohosingvps"
                                                                className="coodiv-text-10
                                                                mb-1
                                                                coodiv-text-exerpt
                                                                color-blackish-blue">Web
                                                                Hosting</h3>
                                                            <p
                                                                data-i18n="[html]genaral.prohosingboxsubtetiletwo"
                                                                className="coodiv-text-11
                                                                fw-100 mb-0
                                                                color-blackish-blue-opacity">Unlimited
                                                                storage,
                                                                unmetered
                                                                bandwidth.</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-6
                                                    col-sm-6 col-xs-8 mb-md-12
                                                    mb-lg-6 mb-3
                                                    hostings-card-items">
                                                    <Link to="vps-hosting.html"
                                                        className="hostings-card
                                                        d-flex flex-column
                                                        align-items-center
                                                        flex-md-row
                                                        border-separate
                                                        position-relative
                                                        rounded-10 px-6 py-8
                                                        overflow-hidden">
                                                        <span
                                                            className="hostings-card-off">5%
                                                            off!</span>
                                                        <div className="card-icon
                                                            d-flex mr-lg-7 mb-9
                                                            mb-lg-0">
                                                            <i className="fas
                                                                fa-poll"></i>
                                                        </div>
                                                        <div className="card-texts
                                                            pr-xl-10">
                                                            <h3
                                                                data-i18n="[html]genaral.prohosingdedicated"
                                                                className="coodiv-text-10
                                                                mb-1
                                                                coodiv-text-exerpt
                                                                color-blackish-blue">Vps
                                                                Hosting</h3>
                                                            <p
                                                                data-i18n="[html]genaral.prohosingboxsubtetiletree"
                                                                className="coodiv-text-11
                                                                fw-100 mb-0
                                                                color-blackish-blue-opacity">Unlimited
                                                                storage,
                                                                unmetered
                                                                bandwidth.</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-6
                                                    col-sm-6 col-xs-8 mb-md-12
                                                    mb-lg-6 mb-3
                                                    hostings-card-items">
                                                    <Link
                                                        to="shared-hosting.html"
                                                        className="hostings-card
                                                        d-flex flex-column
                                                        align-items-center
                                                        flex-md-row
                                                        border-separate
                                                        position-relative
                                                        rounded-10 px-6 py-8
                                                        overflow-hidden">
                                                        <span
                                                            className="hostings-card-off">30%
                                                            off!</span>
                                                        <div className="card-icon
                                                            d-flex mr-lg-7 mb-9
                                                            mb-lg-0">
                                                            <i className="fas
                                                                fa-share-alt"></i>
                                                        </div>
                                                        <div className="card-texts
                                                            pr-xl-10">
                                                            <h3
                                                                data-i18n="[html]genaral.prohosingwebhosting"
                                                                className="coodiv-text-10
                                                                mb-1
                                                                coodiv-text-exerpt
                                                                color-blackish-blue">Shared
                                                                Hosting</h3>
                                                            <p
                                                                data-i18n="[html]genaral.prohosingboxsubtetilefour"
                                                                className="coodiv-text-11
                                                                fw-100 mb-0
                                                                color-blackish-blue-opacity">Unlimited
                                                                storage,
                                                                unmetered
                                                                bandwidth.</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-6
                                                    col-sm-6 col-xs-8 mb-md-12
                                                    mb-lg-6 mb-3
                                                    hostings-card-items">
                                                    <Link
                                                        to="dedicated-servers.html"
                                                        className="hostings-card
                                                        d-flex flex-column
                                                        align-items-center
                                                        flex-md-row
                                                        border-separate
                                                        position-relative
                                                        rounded-10 px-6 py-8
                                                        overflow-hidden">
                                                        <span
                                                            className="hostings-card-off">65%
                                                            off!</span>
                                                        <div className="card-icon
                                                            d-flex mr-lg-7 mb-9
                                                            mb-lg-0">
                                                            <i className="fas
                                                                fa-desktop"></i>
                                                        </div>
                                                        <div className="card-texts
                                                            pr-xl-10">
                                                            <h3
                                                                data-i18n="[html]genaral.prohosingsharedhosting"
                                                                className="coodiv-text-10
                                                                mb-1
                                                                coodiv-text-exerpt
                                                                color-blackish-blue">Dedicated
                                                                Servers</h3>
                                                            <p
                                                                data-i18n="[html]genaral.prohosingboxsubtetilefive"
                                                                className="coodiv-text-11
                                                                fw-100 mb-0
                                                                color-blackish-blue-opacity">Unlimited
                                                                storage,
                                                                unmetered
                                                                bandwidth.</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-6
                                                    col-sm-6 col-xs-8 mb-md-12
                                                    mb-lg-6 mb-3
                                                    hostings-card-items">
                                                    <Link
                                                        to="cpanel-reseller.html"
                                                        className="hostings-card
                                                        d-flex flex-column
                                                        align-items-center
                                                        flex-md-row
                                                        border-separate
                                                        position-relative
                                                        rounded-10 px-6 py-8
                                                        overflow-hidden">
                                                        <span
                                                            className="hostings-card-off">50%
                                                            off!</span>
                                                        <div className="card-icon
                                                            d-flex mr-lg-7 mb-9
                                                            mb-lg-0">
                                                            <i className="fab
                                                                fa-cpanel"></i>
                                                        </div>
                                                        <div className="card-texts
                                                            pr-xl-10">
                                                            <h3
                                                                data-i18n="[html]genaral.prohosingcpanel"
                                                                className="coodiv-text-10
                                                                mb-1
                                                                coodiv-text-exerpt
                                                                color-blackish-blue">Cpanel
                                                                Reseller</h3>
                                                            <p
                                                                data-i18n="[html]genaral.prohosingboxsubtetilesix"
                                                                className="coodiv-text-11
                                                                fw-100 mb-0
                                                                color-blackish-blue-opacity">Unlimited
                                                                storage,
                                                                unmetered
                                                                bandwidth.</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="nav-item dropdown dropdown-mega">
                                        <Link data-i18n="[html]menu.domains"
                                            className="nav-link dropdown-toggle
                                            coodiv-toggle-arrow"
                                            id="domaindropdown" to="#domains"
                                            role="button" data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">Domains</Link>
                                        <div className="coodiv-megamenu-dropdown
                                            mini-version center white-bg
                                            dropdown-menu d-lg-block pt-0"
                                            aria-labelledby="domaindropdown">
                                            <div className="row
                                                justify-content-start
                                                mega-menu-header">
                                                <Link className="toggle-domain-s-t
                                                    d-inline-block col-md-6
                                                    active-link-border pl-lg-10
                                                    pt-lg-8 pb-lg-5 pl-6 pt-4
                                                    pb-4 rounded-top-left-8"
                                                    to="#">
                                                    <h1 className="coodiv-text-8
                                                        title
                                                        color-blackish-blue
                                                        text-left w-100
                                                        d-block">
                                                        <span
                                                            data-i18n="[html]genaral.snagyourdomain">Snag
                                                            your fav domain.</span>
                                                        <span className="d-block
                                                            coodiv-text-11
                                                            color-blackish-blue-opacity
                                                            fw-100">Grab a .com
                                                            starting at <b>$12.95/yr*</b>.</span>
                                                    </h1>
                                                </Link>
                                                <Link className="toggle-domain-s-t
                                                    d-md-inline-block d-none
                                                    col-md-6
                                                    not-active-link-border
                                                    pl-lg-10 pt-lg-8 pb-lg-5
                                                    pl-6 pt-4 pb-4
                                                    rounded-top-right-8"
                                                    to="domains-registration.html">
                                                    <h1 className="coodiv-text-8
                                                        title
                                                        color-blackish-blue
                                                        text-left w-100
                                                        d-block">
                                                        <span
                                                            data-i18n="[html]genaral.transferdomain">Transfer
                                                            your domain to us.</span>
                                                        <span className="d-block
                                                            coodiv-text-11
                                                            color-blackish-blue-opacity
                                                            fw-100">starting at
                                                            <b>$5.88/yr*</b>.</span>
                                                    </h1>
                                                </Link>
                                            </div>
                                            <div className="px-lg-10 pb-lg-10
                                                pt-lg-13 pt-10 px-5 pb-8
                                                mega-menu-body">
                                                <div className="row
                                                    justify-content-center">
                                                    <div className="col-xl-12
                                                        col-lg-7 col-md-8
                                                        col-sm-11">
                                                        <div
                                                            className="domain-search-form
                                                            mb-8">
                                                            <form
                                                                action="domains-registration.html">
                                                                <div
                                                                    className="form-group
                                                                    position-relative
                                                                    text-lg-left
                                                                    text-center">
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
                                                                        fdprocessedid="ie3xhm" />
                                                                    <button
                                                                        data-i18n="[html]genaral.check"
                                                                        className="form-btn
                                                                        btn
                                                                        btn-primary
                                                                        mr-2
                                                                        coodiv-abs-md-cr
                                                                        min-height-px-50
                                                                        w-100
                                                                        w-md-auto"
                                                                        fdprocessedid="6zse4p">check</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="form-bottom
                                                            excerpt
                                                            text-center">
                                                            <p>Lorem20  kla cadlc kokowc kodq </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="nav-item dropdown">
                                        <Link data-i18n="[html]menu.needhelp"
                                            className="nav-link dropdown-toggle
                                            coodiv-toggle-arrow"
                                            id="navbarDropdownHelp"
                                            to="#features" role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">Need help ?</Link>
                                        <ul className="coodiv-menu-dropdown
                                            dropdown-menu"
                                            aria-labelledby="navbarDropdownHelp">
                                            <li className="drop-menu-item"><Link
                                                    data-i18n="[html]menu.helpcentre"
                                                    to="help-center.html">Help
                                                    Center</Link></li>
                                            <li className="drop-menu-item"><Link
                                                    data-i18n="[html]menu.allsupporttopics"
                                                    to="all-topics.html">All
                                                    Support Topics</Link></li>
                                            <li className="drop-menu-item dropdown">
                                                <Link
                                                    data-i18n="[html]menu.serverstatus"
                                                    className="dropdown-toggle
                                                    gr-toggle-arrow"
                                                    id="navbarDropdownSub"
                                                    to="#" role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">Servers
                                                    status</Link>
                                                <ul className="coodiv-menu-dropdown
                                                    dropdown-menu"
                                                    aria-labelledby="navbarDropdownSub">
                                                    <li className="drop-menu-item"><Link
                                                            data-i18n="[html]menu.statuspage"
                                                            to="status-page.html">Status
                                                            Page</Link></li>
                                                    <li className="drop-menu-item"><Link
                                                            data-i18n="[html]menu.inchistory"
                                                            to="incident-history.html">Incident
                                                            History</Link></li>
                                                    <li className="drop-menu-item"><Link
                                                            data-i18n="[html]menu.incpost"
                                                            to="incident-post.html">Incident
                                                            Post</Link></li>
                                                </ul>
                                            </li>
                                            <li className="drop-menu-item dropdown">
                                                <Link data-i18n="[html]menu.blog"
                                                    className="dropdown-toggle
                                                    gr-toggle-arrow"
                                                    id="navbarDropdownSubBlog"
                                                    to="#" role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">Blog</Link>
                                                <ul className="coodiv-menu-dropdown
                                                    dropdown-menu"
                                                    aria-labelledby="navbarDropdownSubBlog">
                                                    <li className="drop-menu-item"><Link
                                                            data-i18n="[html]menu.standardblog"
                                                            to="blog.html">Standard
                                                            Blog</Link></li>
                                                    <li className="drop-menu-item"><Link
                                                            data-i18n="[html]menu.blogstyletwo"
                                                            to="blog-2.html">Blog
                                                            style 2</Link></li>
                                                    <li className="drop-menu-item"><Link
                                                            data-i18n="[html]menu.blogstyletree"
                                                            to="blog-3.html">Blog
                                                            style 3</Link></li>
                                                    <li className="drop-menu-item"><Link
                                                            data-i18n="[html]menu.blogsingle"
                                                            to="blog-single.html">Blog
                                                            Single Standard</Link></li>
                                                    <li className="drop-menu-item"><Link
                                                            data-i18n="[html]menu.blogsingletwo"
                                                            to="blog-single-2.html">Blog
                                                            Single style 2</Link></li>
                                                </ul>
                                            </li>
                                            <li className="drop-menu-item"><Link
                                                    data-i18n="[html]menu.submiteaticket"
                                                    to="#">Submit a ticket</Link></li>
                                        </ul>
                                    </li>


                                    <li className="nav-item dropdown dropdown-mega">
                                        <Link data-i18n="[html]menu.pages"
                                            className="nav-link dropdown-toggle
                                            coodiv-toggle-arrow"
                                            id="navbarDropdownPages"
                                            to="#features" role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">Pages</Link>
                                        <div className="bg-transparent border-0
                                            shadow-0 coodiv-megamenu-dropdown
                                            mini-version light-bg center
                                            white-bg dropdown-menu d-lg-block"
                                            aria-labelledby="navbarDropdownPages">
                                            <div className="row
                                                justify-content-center">
                                                <div className="col-md-4 pr-lg-0
                                                    mb-3 mb-lg-0">
                                                    <h5 className="d-block py-5
                                                        color-blackish-blue
                                                        coodiv-text-9 pl-9 mb-0
                                                        rounded-top-10
                                                        coodiv-bg-gray-2-opacity-visible
                                                        border-bottom-3-green">
                                                        <span
                                                            data-i18n="[html]genaral.corepages">Core
                                                            pages</span> <span
                                                            className="d-block
                                                            color-blackish-blue-opacity
                                                            coodiv-text-12 mt-n2
                                                            font-weight-light">simple
                                                            sub text pages</span>
                                                    </h5>
                                                    <ul
                                                        className="mega-menu-dropdown-ul
                                                        border-opacity
                                                        border-top-0 py-6
                                                        rounded-bottom-20
                                                        shadow-2 white-bg">
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                to="start-vpn.html">Start
                                                                VPN</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                to="network.html">Our
                                                                network</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                to="index-vpn.html">index
                                                                VPN</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                to="index-cdn.html">index
                                                                CDN</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.aboutus"
                                                                to="about.html">About
                                                                Us</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.helpcentre"
                                                                to="help-center.html">Help
                                                                Center</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.allsupporttopics"
                                                                to="all-topics.html">All
                                                                Support Topics</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.serverstatus"
                                                                to="status-page.html">Servers
                                                                status</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.inchistory"
                                                                to="incident-history.html">Incident
                                                                History</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.incpost"
                                                                to="incident-post.html">Incident
                                                                Post</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4 pr-0
                                                    pl-lg-2 mb-3 mb-lg-0">
                                                    <h5 className="d-block py-5
                                                        color-blackish-blue
                                                        coodiv-text-9 pl-9 mb-0
                                                        rounded-top-10
                                                        coodiv-bg-gray-2-opacity-visible
                                                        border-bottom-3-green">
                                                        <span
                                                            data-i18n="[html]genaral.planspages">Plans
                                                            pages</span> <span
                                                            className="d-block
                                                            color-blackish-blue-opacity
                                                            coodiv-text-12 mt-n2
                                                            font-weight-light">simple
                                                            sub text pages</span>
                                                    </h5>
                                                    <ul
                                                        className="mega-menu-dropdown-ul
                                                        border-opacity
                                                        border-top-0 py-6
                                                        rounded-bottom-20
                                                        shadow-2 white-bg">
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.cloudvpshosting"
                                                                to="cloudvps-hosting.html">Cloud
                                                                Vps Hosting</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.cpanelresslers"
                                                                to="cpanel-reseller.html">Cpanel
                                                                Reseller</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.dedicatedservers"
                                                                to="dedicated-servers.html">Dedicated
                                                                Servers</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.domainsregisteration"
                                                                to="domains-registration.html">Domains
                                                                Registration</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.googleworkspace"
                                                                to="google-workspace.html">Google
                                                                Workspace</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.minecraftservers"
                                                                to="minecraft.html">Minecraft
                                                                Servers</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.sharedhosting"
                                                                to="shared-hosting.html">Shared
                                                                Hosting</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.vpshosting"
                                                                to="vps-hosting.html">Vps
                                                                Hosting</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.webhosting"
                                                                to="web-hosting.html">Web
                                                                hosting</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.websitebluider"
                                                                to="website-builder.html">Website
                                                                Builder</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.wordpresshosting"
                                                                to="wordpress-hosting.html">Wordpress
                                                                Hosting</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4 pl-lg-2">
                                                    <h5 className="d-block py-5
                                                        color-blackish-blue
                                                        coodiv-text-9 pl-9 mb-0
                                                        rounded-top-10
                                                        coodiv-bg-gray-2-opacity-visible
                                                        border-bottom-3-green">
                                                        <span
                                                            data-i18n="[html]genaral.mainpages">Main
                                                            pages</span> <span
                                                            className="d-block
                                                            color-blackish-blue-opacity
                                                            coodiv-text-12 mt-n2
                                                            font-weight-light">simple
                                                            sub text pages</span>
                                                    </h5>
                                                    <ul
                                                        className="mega-menu-dropdown-ul
                                                        border-opacity
                                                        border-top-0 py-6
                                                        rounded-bottom-20
                                                        shadow-2 white-bg">
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.standardblog"
                                                                to="blog.html">Standard
                                                                Blog</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.blogstyletwo"
                                                                to="blog-2.html">Blog
                                                                style 2</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.blogstyletree"
                                                                to="blog-3.html">Blog
                                                                style 3</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.blogsingle"
                                                                to="blog-single.html">Blog
                                                                Single Standard</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.blogsingletwo"
                                                                to="blog-single-2.html">Blog
                                                                Single style 2</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.signinpage"
                                                                to="sign-in.html">Sign-in
                                                                Page</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.signuppage"
                                                                to="sign-up.html">Sign-up
                                                                Page</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                data-i18n="[html]menu.forgetpass"
                                                                to="forget-password.html">Forget
                                                                Password</Link></li>
                                                        <li
                                                            className="drop-menu-item"><Link
                                                                
                                                                to="/contact">Contact
                                                                Us</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="nav-item">
                                        <Link 
                                            className="nav-link" to="/contact"
                                            role="button" aria-expanded="false">Contact
                                            Us</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>


                        <div className="header-btn ml-auto ml-lg-10 mr-5 d-none
                            d-xs-block position-relative">
                            <Link data-i18n="[html]genaral.freetrial" className="btn
                                btn-warning coodiv-text-9" to="#">Free trial</Link>
                            <Link className="headerphone-number">(+866) 96-88554434</Link>
                        </div>


                        <button className="navbar-toggler btn-close-off-canvas
                            hamburger-icon border-0 collapsed" type="button"
                            data-toggle="collapse" data-target="#mobile-menu"
                            aria-controls="mobile-menu" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="hamburger hamburger--squeeze
                                js-hamburger">
                                <span className="hamburger-box">
                                    <i className="feather icon-menu"></i>
                                    <i className="feather icon-x"></i>
                                </span>
                            </span>
                        </button>

                    </nav>

                </div>
            </header>
    </div>
  )
}

export default Navbar