import React from "react";
import { Link } from "react-router-dom";

function SyncRightBox(props) {
    
  return (
    
                                <div className="pricing-box-one plan-with-montains eee" style={{background: props.bgColor}}>
                                   
                                    <div className="price-content">
                                        <span className="small-title-header-span">
                                           {props.planTitle}
                                            <span className="plan-badge">{props.planOffer}</span>
                                        </span>
                                        <div className="d-flex align-items-end
                                            mt-11">
                                            <span className="currency mr-2
                                                coodiv-text-6 font-weight-light
                                                line-spacing-none
                                                text-blackish-blue">{props.planCurrency}</span>
                                            <h2 className="price-value coodiv-text-2
                                                font-weight-bold
                                                line-spacing-none mb-0
                                                dynamic-value
                                                text-blackish-blue"
                                                >
                                                {props.planPiceF}
                                                <span className="coodiv-text-8
                                                    font-weight-light">{props.planPicePaisa}</span>
                                            </h2>
                                        </div>
                                        <span className="price-bottom-text
                                            dynamic-value coodiv-text-11 mt-2
                                            text-blackish-blue coodiv-opacity-7
                                            d-inline-flex" data-active="billed
                                            yearly" data-monthly="billed
                                            monthly" data-yearly="billed
                                            yearly"></span>
                                        <ul className="card-list list-style-check
                                            pl-0 mt-5 mt-lg-11">
                                            <li className="coodiv-text-10 mb-2">{props.planIcon} {props.planList1}</li>
                                            <li className="coodiv-text-10 mb-2">{props.planIcon} {props.planList2}</li>
                                            <li className="coodiv-text-10 mb-2">{props.planIcon} {props.planList3}</li>
                                            <li className="coodiv-text-10">{props.planIcon} {props.planList4}</li>
                                           
                                        </ul>
                                    </div>
                                    <Link to="#" className="btn btn-special-home-plan
                                        with-icon coodiv-hover-y px-xl-8 px-lg-4
                                        px-sm-8 px-4 rounded-20 coodiv-text-12
                                        text-uppercase">Try The Plan Now</Link>
                                    
                                </div>
                           
  );
}

export default SyncRightBox;
