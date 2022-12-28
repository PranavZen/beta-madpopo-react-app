import React from 'react'
import { Link } from 'react-router-dom'

function FifthTabContent() {
  return (
    <div className="main-homepage-item">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8 mb-9">

                    <div className="pricing-plan-two
                        coodiv-hover-shadow-1 bg-white border
                        rounded-10 text-center pt-9 pr-6 pl-6">
                        <span className="badge coodiv-badge
                            badge-primary rounded-pill
                            coodiv-text-12 text-uppercase">for small
                            business</span>
                        <h2 className="price-of-plan coodiv-text-3
                            font-weight-bold text-blackish-blue
                            line-spacing-none mb-2 mt-8">$12<span
                                className="payment-type-m">monthly</span></h2>
                        <p className="coodiv-text-11 mb-7 mb-lg-11
                            coodiv-color-blackish-blue-opacity-7
                            pr-13 pl-13">Fast SSD Storage and Real
                            24/7 Technical Support.</p>
                        <ul className="card-list list-style-check pl-0
                            mt-7 mt-lg-11
                            justify-content-center-li">
                            <li className="coodiv-text-9">2 TB of Space</li>
                            <li className="coodiv-text-9">Unlimited
                                Bandwidth</li>
                            <li className="coodiv-text-9">Full backup
                                Systems</li>
                            <li className="disabled coodiv-text-9"><i
                                    className="icon icon-simple-remove"></i>Free
                                Domain</li>
                            <li className="disabled coodiv-text-9"><i
                                    className="icon icon-simple-remove"></i>Unlimited
                                Database</li>
                        </ul>
                        <Link to="#" className="btn-order"><span>Order
                                Now</span></Link>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-8 mb-9">

                    <div className="pricing-plan-two
                        coodiv-hover-shadow-1 bg-white border
                        rounded-10 text-center pt-9 pr-6 pl-6">
                        <span className="badge coodiv-badge
                            badge-warning rounded-pill
                            coodiv-text-12 text-uppercase">for
                            medium business</span>
                        <h2 className="price-of-plan coodiv-text-3
                            font-weight-bold text-blackish-blue
                            line-spacing-none mb-2 mt-8">$15<span
                                className="payment-type-m">monthly</span></h2>
                        <p className="coodiv-text-11 mb-7 mb-lg-11
                            coodiv-color-blackish-blue-opacity-7
                            pr-13 pl-13">Fast SSD Storage and Real
                            24/7 Technical Support.</p>
                        <ul className="card-list list-style-check pl-0
                            mt-7 mt-lg-11
                            justify-content-center-li">
                            <li className="coodiv-text-9">2 TB of Space</li>
                            <li className="coodiv-text-9">Unlimited
                                Bandwidth</li>
                            <li className="coodiv-text-9">Full backup
                                Systems</li>
                            <li className="coodiv-text-9">Free Domain</li>
                            <li className="disabled coodiv-text-9"><i
                                    className="icon icon-simple-remove"></i>Unlimited
                                Database</li>
                        </ul>
                        <Link to="#" className="btn-order"><span>Order
                                Now</span></Link>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-8 mb-9">

                    <div className="pricing-plan-two
                        coodiv-hover-shadow-1 bg-white border
                        rounded-10 text-center pt-9 pr-6 pl-6">
                        <span className="badge coodiv-badge badge
                            badge-info rounded-pill coodiv-text-12
                            text-uppercase">for big business</span>
                        <h2 className="price-of-plan coodiv-text-3
                            font-weight-bold text-blackish-blue
                            line-spacing-none mb-2 mt-8">$19<span
                                className="payment-type-m">monthly</span></h2>
                        <p className="coodiv-text-11 mb-7 mb-lg-11
                            coodiv-color-blackish-blue-opacity-7
                            pr-13 pl-13">Fast SSD Storage and Real
                            24/7 Technical Support.</p>
                        <ul className="card-list list-style-check pl-0
                            mt-7 mt-lg-11
                            justify-content-center-li">
                            <li className="coodiv-text-9">2 TB of Space</li>
                            <li className="coodiv-text-9">Unlimited
                                Bandwidth</li>
                            <li className="coodiv-text-9">Full backup
                                Systems</li>
                            <li className="coodiv-text-9">Free Domain</li>
                            <li className="coodiv-text-9">Unlimited
                                Database</li>
                        </ul>
                        <Link to="#" className="btn-order"><span>Order
                                Now</span></Link>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default FifthTabContent