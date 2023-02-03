import React from 'react'

function AreaButtons() {
    
  return ( 
   

                        <div className="nav" id="global-network-tabs" role="tablist"
                            aria-orientation="vertical">
 
                            <a className="network-country
                                nav-link "
                                id="global-network-country-01-tab"
                                data-toggle="pill"
                                href="#global-network-country-01" role="tab"
                                aria-controls="global-network-country-01"
                                aria-selected="true">
                                <span className="coodiv-text-12">USA  <small>Central</small></span>
                                <i className="network-country-bottom-border"></i>
                            </a>

                            <a 
                                className="network-country nav-link"
                                id="global-network-country-02-tab"
                                data-toggle="pill"
                                href="#global-network-country-02" role="tab"
                                aria-controls="global-network-country-02"
                                aria-selected="false">
                                <span className="coodiv-text-12">USA <small>East</small></span>
                                <i className="network-country-bottom-border"></i>
                            </a>

                            <a 
                                className="network-country nav-link"
                                id="global-network-country-03-tab"
                                data-toggle="pill"
                                href="#global-network-country-03" role="tab"
                                aria-controls="global-network-country-03"
                                aria-selected="false">
                                <span className="coodiv-text-12">USA <small>West</small></span>
                                <i className="network-country-bottom-border"></i>
                            </a>

                            <a 
                                className="network-country nav-link"
                                id="global-network-country-04-tab"
                                data-toggle="pill"
                                href="#global-network-country-04" role="tab"
                                aria-controls="global-network-country-04"
                                aria-selected="true">
                                <span className="coodiv-text-12">Asia
                                    <small>Singapore</small></span>
                                <i className="network-country-bottom-border"></i>
                            </a>

                            <a 
                                className="network-country nav-link active"
                                id="global-network-country-05-tab"
                                data-toggle="pill"
                                href="#global-network-country-05" role="tab"
                                aria-controls="global-network-country-05"
                                aria-selected="false">
                                <span className="coodiv-text-12">India <small>Mumbai</small></span>
                                <i className="network-country-bottom-border"></i>
                            </a>

                            <a 
                                className="network-country nav-link"
                                id="global-network-country-06-tab"
                                data-toggle="pill"
                                href="#global-network-country-06" role="tab"
                                aria-controls="global-network-country-06"
                                aria-selected="false">
                                <span className="coodiv-text-12">European Union  <small>Germany</small></span>
                                <i className="network-country-bottom-border"></i>
                            </a>
                            <a 
                            className="network-country nav-link"
                            id="global-network-country-07-tab"
                            data-toggle="pill"
                            href="#global-network-country-07" role="tab"
                            aria-controls="global-network-country-07"
                            aria-selected="false">
                            <span className="coodiv-text-12">UK  <small>London</small></span>
                            <i className="network-country-bottom-border"></i>
                        </a>

                        </div>

  )
}

export default AreaButtons