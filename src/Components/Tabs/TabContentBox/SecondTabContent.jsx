import React from 'react'
import { Link } from 'react-router-dom'

function SecondTabContent() {
  return (
    <div className="main-homepage-item">
    <div className="row justify-content-center px-md-2">
        <div className="col-lg-4 col-md-4 col-sm-8 mb-9 px-8
            px-md-4 px-lg-4">

            <div className="pricing-plan-tree
                coodiv-hover-shadow-1 bg-white border
                rounded-10 text-center pt-6 pr-6 pl-6 pb-20
                position-relative">
                <span className="badge-plan color1">STARTER</span>
                <span className="plan-sub-title">ENCRYPTION
                    EVERYWHERE</span>
                <img className="plan-sub-img"
                    src="image/ssl/ssl.png" alt="" />
                <h2 className="price-of-plan coodiv-text-3
                    font-weight-bold text-blackish-blue
                    line-spacing-none mb-2 mt-5">
                    $12
                </h2>
                <p className="coodiv-text-11 mb-7 mb-lg-5
                    coodiv-color-blackish-blue-opacity-7
                    pr-13 pl-13">Only Onetime.</p>
                <ul className="card-list list-style-check pl-0
                    mt-7 mt-lg-8 justify-content-center-li">
                    <li className="coodiv-text-11">
                        <Link 
                            className="popover-host-features"
                            >
                            All Important Features
                        </Link>
                    </li>
                    <li className="coodiv-text-11"><strong>FREE
                            Domain</strong> Name Included</li>
                    <li className="coodiv-text-11">Redundant
                        <strong>Daily Backups</strong></li>
                    <li className="disabled coodiv-text-11"><i
                            className="icon icon-simple-remove"></i>Free
                        CDN & Website Builder</li>
                    <li className="disabled coodiv-text-11"><i
                            className="icon icon-simple-remove"></i>Unlimited
                        Premium SSLs</li>
                    <li className="disabled coodiv-text-11"><i
                            className="icon icon-simple-remove"></i>DDOS
                        Protection</li>
                </ul>
                <Link href="#" className="btn-order color1"><span>Order
                        Now</span></Link>
            </div>

        </div>
        <div className="col-lg-4 col-md-4 col-sm-8 mb-9 px-8
            px-md-4 px-lg-4">

            <div className="pricing-plan-tree
                coodiv-hover-shadow-1 bg-white border
                rounded-10 text-center pt-6 pr-6 pl-6 pb-20
                position-relative">
                <span className="badge-plan color2">STARTER</span>
                <span className="plan-sub-title">ENCRYPTION
                    EVERYWHERE</span>
                <img className="plan-sub-img"
                    src="image/ssl/ssl.png" alt="" />
                <h2 className="price-of-plan coodiv-text-3
                    font-weight-bold text-blackish-blue
                    line-spacing-none mb-2 mt-5">
                    $12
                </h2>
                <p className="coodiv-text-11 mb-7 mb-lg-5
                    coodiv-color-blackish-blue-opacity-7
                    pr-13 pl-13">Only Onetime.</p>
                <ul className="card-list list-style-check pl-0
                    mt-7 mt-lg-8 justify-content-center-li">
                    <li className="coodiv-text-11">
                        <Link 
                            className="popover-host-features"
                            >
                            All Important Features
                        </Link>
                    </li>
                    <li className="coodiv-text-11"><strong>FREE
                            Domain</strong> Name Included</li>
                    <li className="coodiv-text-11">Redundant
                        <strong>Daily Backups</strong></li>
                    <li className="coodiv-text-11">Free CDN &
                        Website Builder</li>
                    <li className="disabled coodiv-text-11"><i
                            className="icon icon-simple-remove"></i>Unlimited
                        Premium SSLs</li>
                    <li className="disabled coodiv-text-11"><i
                            className="icon icon-simple-remove"></i>DDOS
                        Protection</li>
                </ul>
                <Link href="#" className="btn-order color2"><span>Order
                        Now</span></Link>
            </div>

        </div>
        <div className="col-lg-4 col-md-4 col-sm-8 mb-9 px-8
            px-md-4 px-lg-4">

            <div className="pricing-plan-tree
                coodiv-hover-shadow-1 bg-white border
                rounded-10 text-center pt-6 pr-6 pl-6 pb-20
                position-relative">
                <span className="badge-plan color3">STARTER</span>
                <span className="plan-sub-title">ENCRYPTION
                    EVERYWHERE</span>
                <img className="plan-sub-img"
                    src="image/ssl/ssls.png" alt="" />
                <h2 className="price-of-plan coodiv-text-3
                    font-weight-bold text-blackish-blue
                    line-spacing-none mb-2 mt-5">
                    $12
                </h2>
                <p className="coodiv-text-11 mb-7 mb-lg-5
                    coodiv-color-blackish-blue-opacity-7
                    pr-13 pl-13">Only Onetime.</p>
                <ul className="card-list list-style-check pl-0
                    mt-7 mt-lg-8 justify-content-center-li">
                    <li className="coodiv-text-11">
                        <Link 
                            className="popover-host-features"
                            >
                            All Important Features
                        </Link>
                    </li>
                    <li className="coodiv-text-11"><strong>FREE
                            Domain</strong> Name Included</li>
                    <li className="coodiv-text-11">Redundant
                        <strong>Daily Backups</strong></li>
                    <li className="coodiv-text-11">Free CDN &
                        Website Builder</li>
                    <li className="coodiv-text-11">Unlimited
                        Premium SSLs</li>
                    <li className="coodiv-text-11">DDOS
                        Protection</li>
                </ul>
                <Link href="#" className="btn-order color3"><span>Order
                        Now</span></Link>
            </div>

        </div>
    </div>
</div>
  )
}

export default SecondTabContent