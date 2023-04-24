import React from 'react'
import { woldMap } from '../index'
import AreaButtons from './AreaButtons';
import AreaInfo from './AreaInfo';

function Hostareawrap() {
  return (
    <div className="our-servers-place-section position-relative bg-dark-blue_black
                bg-pattern pattern-3 pt-0 overflow-hidden">
                
                <div className="container">

                    <div className="row justify-content-center dark-mode-texts">
                        <div className="col-xl-8 col-lg-9">
                            <div className="px-md-12 text-center mb-9 mb-lg-20">
                                <h2 className="title coodiv-text-4 mb-4">Our Availability: Expanding Worldwide</h2>
                                <p className="coodiv-text-11 mb-0">Discover Our Worldwide Presence Offering High Performing Servers in Strategic Regions.</p>
                            </div>
                        </div>
                    </div> 

                   
                    
                    <div className="network-map-container position-relative mt-20
                        mt-lg-0">

                        <AreaButtons/>

                        <img className="w-100 mapOpacity"
                            src={woldMap} alt="" />
                    </div>
                </div>
            </div>
  )
}

export default Hostareawrap