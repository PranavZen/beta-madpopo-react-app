import React from 'react'
import { Link } from 'react-router-dom'
import { game1, game2, game3 } from '../../index'

function ThirdTabContent() {
  return (
    <div className="main-homepage-item">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8 mb-9">

                    <div className="games-plan plan-1 box-shadow-1
                        bg-white rounded-20 text-center pb-20 pt-9
                        pr-6 pl-6 position-relative
                        overflow-hidden">
                        <div className="d-flex mb-lg-7 plan-header">
                            <div className="game-logo">
                                <img src={game1}
                                    alt="" />
                            </div>
                            <div className="game-title">
                                <h3>
                                    counter strike<br />
                                    servers
                                </h3>
                                <h2 className="text-blackish-blue">$12<span
                                        className="payment-type-m">monthly</span></h2>
                            </div>
                        </div>
                        <ul className="card-list list-style-check pl-0
                            mt-7 mt-lg-11
                            justify-content-center-li">
                            <li className="coodiv-text-9">
                                <Link
                                    className="popover-host-features"
                                    >
                                    All Important Features
                                </Link>
                            </li>
                            <li className="coodiv-text-9">2 TB of Space</li>
                            <li className="coodiv-text-9">Unlimited
                                Bandwidth</li>
                            <li className="coodiv-text-9">Full backup
                                Systems</li>
                        </ul>
                        <Link to="#" className="btn-order"><span>Order
                                Now</span></Link>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-8 mb-9">

                    <div className="games-plan plan-2 box-shadow-1
                        bg-white rounded-20 text-center pb-20 pt-9
                        pr-6 pl-6 position-relative
                        overflow-hidden">
                        <div className="d-flex mb-lg-7 plan-header">
                            <div className="game-logo">
                                <img src={game2}
                                    alt="" />
                            </div>
                            <div className="game-title">
                                <h3>
                                    minecraft game<br />
                                    servers
                                </h3>
                                <h2 className="text-blackish-blue">$4<span
                                        className="payment-type-m">monthly</span></h2>
                            </div>
                        </div>
                        <ul className="card-list list-style-check pl-0
                            mt-7 mt-lg-11
                            justify-content-center-li">
                            <li className="coodiv-text-9">
                                <Link 
                                    className="popover-host-features"
                                    >
                                    All Important Features
                                </Link>
                            </li>
                            <li className="coodiv-text-9">2 TB of Space</li>
                            <li className="coodiv-text-9">Unlimited
                                Bandwidth</li>
                            <li className="coodiv-text-9">Full backup
                                Systems</li>
                        </ul>
                        <Link to="#" className="btn-order"><span>Order
                                Now</span></Link>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-8 mb-9">

                    <div className="games-plan plan-3 box-shadow-1
                        bg-white rounded-20 text-center pb-20 pt-9
                        pr-6 pl-6 position-relative
                        overflow-hidden">
                        <div className="d-flex mb-lg-7 plan-header">
                            <div className="game-logo">
                                <img src={game3}
                                    alt="" />
                            </div>
                            <div className="game-title">
                                <h3>
                                    rust game<br />
                                    servers
                                </h3>
                                <h2 className="text-blackish-blue">$19<span
                                        className="payment-type-m">monthly</span></h2>
                            </div>
                        </div>
                        <ul className="card-list list-style-check pl-0
                            mt-7 mt-lg-11
                            justify-content-center-li">
                            <li className="coodiv-text-9">
                                <Link 
                                    className="popover-host-features"
                                    
                                    >
                                    All Important Features
                                </Link>
                            </li>
                            <li className="coodiv-text-9">2 TB of Space</li>
                            <li className="coodiv-text-9">Unlimited
                                Bandwidth</li>
                            <li className="coodiv-text-9">Full backup
                                Systems</li>
                        </ul>
                        <Link to="#" className="btn-order"><span>Order
                                Now</span></Link>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default ThirdTabContent