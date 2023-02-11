import React from "react";
import {
  wpFeatureImg1,
  wpFeatureImg2,
  wpFeatureImg3,
  wpFeatureImg4,
  wpFeatureImg5,
  wpFeatureImg6,
} from "../index";

function WindowsHostingFeatures() {
  return (
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2 className="wooTitle">What’s Included in Our Windows Web Hosting Plans?</h2>
        <p className="winPara">We make your Windows web hosting experience the best one by providing you with the most prominent features. Seamlessly host your applications that require ASP.NET, MS SQL, and PHP with these top-notch features</p>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg1} alt="SSD NVMe Drive" />
              </div>
              <h4>SSD NVMe Drive</h4>
              <p>
              Experience accelerated website performance while you host your website at MilesWeb server. Your complete website will be stored at our powerful SSD NVMe based servers that give you blazing fast speed.
              </p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg3} alt="Plesk Control Panel" />
              </div>
              <h4>Plesk Control Panel</h4>
              <p>
              Seamlessly manage your Windows hosting account with Plesk control panel that comes with our hosting account. You can manage your website, domain, emails and databases through this Plesk panel.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg4} alt="1-Click Installer" className="width100"/>
              </div>
              <h4>1-Click Installer</h4>
              <p>
              We make it easy for you to install apps with just one click. You can save a lot of time and efforts in downloading and installing those apps on the server. WordPress, Joomla, Magento and 400+ such apps can be installed with ease.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg5} alt="Programming and Database" />
              </div>
              <h4>Programming and Database</h4>
              <p>
              The programming languages that you get with our Windows shared hosting plans are: ASP/ASP.NET 3.5 and 4.6, PHP, SSICurl, GD Library, MVC, AJAX, MySQL, and MS SQL 2012 Express.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg6} alt="Instant Account Setup" />
              </div>
              <h4>Instant Account Setup</h4>
              <p>
              Just after your payment process is done we'll set up your Windows hosting account instantly. You don't have to wait for hours and hours to set up your small business hosting.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg2} alt="Secure Email" className="width100"/>
              </div>
              <h4>Secure Email</h4>
              <p>
              You can securely access emails directly from any web browser on Windows, Mac or any mobile devices. We support POP3/ IMAP/ SMTP protocols for sending and receiving emails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowsHostingFeatures;
