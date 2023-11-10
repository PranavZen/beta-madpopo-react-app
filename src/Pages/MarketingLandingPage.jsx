import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import NavbarInner from "../Components/Navbar/NavbarInner";
import FAQ from "../Components/FAQs/FAQ";
import {
  ebookImg1,
  ebookImg2,
  ebookImg3,
  ebookImg4,
  ebookImg5,
  ebookImg6,
  ebookImg7,
  ebookImg8,
  successstoryImg,
} from "../Components";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { Link } from "react-router-dom";

function MarketingLandingPage() {
  const testSiteKey = "6LcgkwApAAAAAO3aILJwmebdXVAE3NjRJRQeglNn";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [industry, setIndustry] = useState("");
  const [company, setCompany] = useState("");
  const [industryError, setIndustryError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [formResponse, setResponse] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const isValidIndustry = (industry) => {
    return industry !== "";
  };

  const isValidCompany = (company) => {
    return company !== "";
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPhoneError("");
    setIndustryError("");
    setCompanyError("");
    let isValid = true;
    if (name === "") {
      setNameError("Name is required");
      isValid = false;
    } else if (!isValidName(name)) {
      setNameError("Name should only contain text");
      isValid = false;
    }

    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Email should be in a valid format");
      isValid = false;
    }

    if (phone === "") {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!isValidPhoneNumber(phone)) {
      setPhoneError("Phone number should be 10 digits");
      isValid = false;
    }

    if (!isValidIndustry(industry)) {
      isValid = false;
      setIndustryError("Please select an industry");
    }

    if (company === "") {
      isValid = false;
      setCompanyError("Company is required");
    }
    if (!recaptchaChecked) {
      setResponse("Please complete reCAPTCHA");
      isValid = false;
    }
    if (isValid) {
      // Data is valid, send it to the server
      axios
        .post("https://madpopo.com/landing-page-save-data.php", {
          name: name,
          email: email,
          phone: phone,
          industry: industry,
          company: company,
        })
        .then((response) => {
          if (response.data.type === "success") {
            setResponse(response.data.message);
            setSuccessMessage(response.data.message);
          } else {
            setResponse(response.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const handleRecaptchaSuccess = () => {
    setRecaptchaChecked(true);
  };
  const handleCancel = () => {
    
    setName("");
    setEmail("");
    setPhone("");
    setIndustry("");
    setCompany("");
    setSuccessMessage(""); 
  };
  return (
    <div>
      <NavbarInner />
      <section id="section1">
        <div className="container section-container">
          <div className="row">
            <div className="col-sm-6" id="col1">
              <div className="text-content">
                <h3 className="heading3">FREE EBOOK</h3>
                <h1 className="heading1">
                  Website Success Secrets: A Buisness Owner's Guide
                </h1>
                <p className="para">
                  Are you a buisness owner ready to unlock the secrets to online
                  success by adopting the best practices for Successful Website{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 padLrPad">
              <div id="free-ebook-form">
                <form
                  className="contact-form ebook-form"
                  id="myForm"
                  onSubmit={handleSubmit}
                >
                <div
                    className={`output_message ${
                      successMessage ? "success_message" : ""
                    }`}
                  >
                    {successMessage ? (
                      <div>
                        <span className="output_message_text coodiv-text-6 font-weight-bold color-blackish-blue">
                          {successMessage}
                        </span>
                        <Link
                          className="btn btn-danger mx-auto"
                          onClick={() => {
                            setSuccessMessage("");
                            handleCancel();
                            window.location.reload();
                          }}
                        >
                          Ok
                        </Link>
                      </div>
                    ) : null}
                  </div>
                  <h4 className="heading4">Download free E-book</h4>
                  <div className="form_box">
                    <div className="col-md-12">
                      <div className="form-group mb-7 ">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input
                          className="form-control coodiv-text-11 border form-elements"
                          type="text"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <div className="error-message" id="name-error">
                          {nameError}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-7">
                        <i className="fa fa-envelope"></i>
                        <input
                          className="form-control coodiv-text-11 border form-elements"
                          type="email"
                          id="email"
                          placeholder="Your E-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <div className="error-message" id="email-error">
                          {emailError}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-7">
                        <i className="fa fa-phone"></i>
                        <input
                          className="form-control coodiv-text-11 border form-elements"
                          type="tel"
                          id="phone"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                        <div className="error-message" id="phone-error">
                          {phoneError}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-7">
                        <i className="fa fa-industry"></i>
                        <input
                          className="form-control coodiv-text-11 border form-elements"
                          id="industry"
                          required
                          onChange={(e) => setIndustry(e.target.value)}
                          placeholder="Industry"
                        >
                          {/* <option value="">Industry</option>
                          <option value="abc">Accounting</option>
                          <option value="xyz">Automotive</option>
                          <option value="Education & EdTech">Education & EdTech</option>
                          <option value="Finance">Finance</option>
                          <option value="Food & Beverages">Food & Beverages</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="FMCG">FMCG</option>
                          <option value="Retail and eCommerce">Retail and eCommerce</option>
                          <option value="Sports & Entertainment">Sports & Entertainment</option>
                          <option value="Others">Others</option> */}
                        </input>
                        <div
                          className="error-message"
                          id="industry-error"
                        ></div>
                      </div>
                      
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-7">
                        <i className="fa fa-building" aria-hidden="true"></i>
                        <input
                          className="form-control coodiv-text-11 border form-elements"
                          type="text"
                          id="company"
                          placeholder="Company Name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                        />
                        <div className="error-message" id="company-error"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group coodiv-text-11 form-elements">
                        <div className="g-recaptcha">
                          <ReCAPTCHA sitekey={testSiteKey} onChange={handleRecaptchaSuccess}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group button-block mt-3">
                        <button
                          className="form-btn btn btn-warning d-block w-100"
                          type="submit"
                          disabled={!recaptchaChecked}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section2">
        <h4 className="coodiv-text-4 title">
          This ebook will acquaint you with
        </h4>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <img src={ebookImg1} alt="audience" className="image" />
              <h6>Understanding Your Audience</h6>
              <p>
                {" "}
                It explores the importance of knowing and understanding your
                target audience to create a compelling online presence
              </p>
            </div>
            <div className="col-md-4 col-lg-3">
              <img src={ebookImg2} alt="audience" className="image" />
              <h6>User-Friendly Web Design</h6>
              <p>
                The ebook discusses the art of web design, ensuring that your
                website is user-friendly and engaging.
              </p>
            </div>
            <div className="col-md-4 col-lg-3">
              <img src={ebookImg3} alt="audience" className="image" />
              <h6>Compelling Content</h6>
              <p>
                It provides insights into creating content that informs,
                engages, and persuades visitors.
              </p>
            </div>
            <div className="col-md-4 col-lg-3">
              <img src={ebookImg4} alt="audience" className="image" />
              <h6>Search Engine Optimization (SEO)</h6>
              <p>
                The ebook delves into SEO strategies that boost your website's
                visibility and rankings on search engines.
              </p>
            </div>
            <div className="col-md-4 col-lg-3">
              <img src={ebookImg5} alt="audience" className="image" />
              <h6>Social Media Engagement</h6>
              <p>
                It explains how to leverage social media to connect with your
                audience, build communities, and promote your brand effectively.
              </p>
            </div>
            <div className="col-md-4 col-lg-3">
              <img src={ebookImg6} alt="audience" className="image" />
              <h6>Data Analytics</h6>
              <p>
                The ebook covers the importance of data analytics in making
                informed decisions and optimizing your strategies.
              </p>
            </div>
            <div className="col-md-4 col-lg-3">
              <img src={ebookImg7} alt="audience" className="image" />
              <h6>E-commerce Excellence</h6>
              <p>
                {" "}
                It discusses strategies for setting up and succeeding in
                e-commerce, including optimizing the customer journey and
                boosting sales.
              </p>
            </div>
            <div className="col-md-4 col-lg-3">
              <img src={ebookImg8} alt="audience" className="image" />
              <h6>Future-Proofing Your Online PresenceAudience</h6>
              <p>
                {" "}
                The ebook explores strategies for adapting to emerging
                technologies, evolving consumer expectations, and unforeseen
                challenges in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="section3">
        <div className="container ">
          <div className="row">
            <div className="col-sm-6">
              <h1>
                Are you a business owner looking to elevate your online success?{" "}
              </h1>
              <p className="para">
                Website Success Secrets: A Business Owner's Guide' will guide
                you through a wealth of strategies that can enhance your online
                presence, boost your conversions, and ultimately increase your
                revenue. Download this ebook to unlock the secrets of digital
                triumph.
              </p>
            </div>
            <div className="lapyBoxWrap">
              <img src={successstoryImg} alt="" id="laptop-img" />
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
}

export default MarketingLandingPage;
