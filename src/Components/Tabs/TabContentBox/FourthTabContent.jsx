import React from 'react'
import { Link } from 'react-router-dom'
import { game1 } from '../..'

function FourthTabContent() {
  return (
    <div className="main-homepage-item">
            <div className="row justify-content-center">
                <div className="col-lg-12 mb-9">

                    <div className="voice-plan plan-1 box-shadow-1
                        bg-white rounded-20 text-center pb-10 pt-9
                        pr-6 pl-6 position-relative
                        overflow-hidden">
                        <div className="row justify-content-between
                            plan-header">
                            <div className="d-flex mb-lg-7">
                                <div className="plan-logo">
                                    <img
                                        src={game1}
                                        alt="" />
                                </div>
                                <div className="plan-title">
                                    <h3>TeamSpeak 3 Servers</h3>
                                    <h2 className="text-blackish-blue">
                                        <span
                                            className="payment-type-m">TeamSpeak
                                            Version 3.0</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="list-group list-bill-plan
                                d-none d-lg-block">
                                <Link className="active"
                                   >
                                    <span className="title">Bill yearly<i>Save
                                            2 Months</i></span><span
                                        className="price">390$<i>yearly</i></span>
                                </Link>
                                <Link className="">
                                    <span className="title">Bill monthly</span><span
                                        className="price">38$<i>monthly</i></span>
                                </Link>
                            </div>
                        </div>
                        <ul className="list-style-check pl-0 mt-7
                            mt-lg-11 li-flex-between
                            full-plan-disc">
                            <li className="coodiv-text-9 green">
                                <Link className="popover-host-features" >
                                    All Important Features
                                </Link>
                                <span>included with all of the plans</span>
                            </li>
                            <li className="coodiv-text-9 blue">2 TB of
                                Space<span>included with extra
                                    payment</span></li>
                            <li className="coodiv-text-9 reed">Unlimited
                                Bandwidth<span>not included</span></li>
                            <li className="coodiv-text-9 green">Full
                                backup Systems</li>
                        </ul>
                        <Link href="#" className="btn-order"><span>Order
                                Now</span></Link>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default FourthTabContent