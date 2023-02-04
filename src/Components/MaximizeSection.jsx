import React from "react";
import { webSpeedImg } from "../Components/index";

function MaximizeSection() {
  return (
    <section className="web_speed_section globalWave">
      <div className="container">
        <div className="webSpeedWrap">
          <div className="col-md-6 leftCstmWidth">
            <div className="webSpeedImgWrap">
                <img src={webSpeedImg} alt="Web Speed" />
            </div>
          </div>
          <div className="col-md-6 rightCstmWidth">
            <div className="webSpeedDataWrap">
                <div className="webSpeedSectionTitle">
                    <h3>Maximize Website Speed</h3>
                </div>
                <ul className="webSpeedList">
                    <li><span><i class="feather icon-check"></i></span> <p>Maximize performance with LiteSpeed Web Server technology.</p></li>
                    <li><span><i class="feather icon-check"></i></span> <p>Enjoy optimized performance with advanced cache solutions.</p></li>
                    <li><span><i class="feather icon-check"></i></span> <p>Host your website in any of our server locations: USA, United Kingdom, Brazil, Singapore, Lithuania, India, and the Netherlands.</p></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaximizeSection;
