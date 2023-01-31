import React from 'react'
import { woldMap } from '../index'
import AreaButtons from './AreaButtons';
import AreaInfo from './AreaInfo';

function Hostareawrap() {
  return (
    <div className="our-servers-place-section position-relative bg-dark-blue
                bg-pattern pattern-3 pt-14 pt-lg-22 pb-0 overflow-hidden">
                <span className="section-side-shadow-black-white"></span>
                <div className="container">

                    <div className="row justify-content-center dark-mode-texts">
                        <div className="col-xl-8 col-lg-9">
                            <div className="px-md-12 text-center mb-9 mb-lg-20">
                                <h2 className="title coodiv-text-4 mb-4">Think
                                    Global, Host Local</h2>
                                <p className="coodiv-text-10 mb-0">Global Network
                                    powered by 11 enterprise-className datacenters
                                    and 200 Global CDN Anycast Network access
                                    points.</p>
                            </div>
                        </div>
                    </div> 

                    <AreaInfo/>
                    
                    
                    <div className="network-map-container position-relative mt-20
                        mt-lg-0">

                        <AreaButtons/>

                        <img className="w-100"
                            src={woldMap} alt="" />
                    </div>
                </div>
            </div>
  )
}

export default Hostareawrap