import React, { useState } from "react";
import axios from "axios";
function WcForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobile] = useState("");
  const [formResponse, setResponse] = useState("");
  const [formResponse1, setResponse1] = useState("");
  const [formResponse2, setResponse2] = useState("");
  const [otpResponse, setOtpResponse] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [newOTP, setOtp] = useState("");
  const [userOTP, setuseOtp] = useState("");
  const [showInputBox, setShowInputBox] = useState(false);
  const [selectedOption, setSelectedOption] = useState("WordPress Hosting");
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (name && email && mobileNumber) {
      axios
        .post("https://madpopo.com/save-data.php", {
          name: name,
          email: email,
          mobileNumber: mobileNumber,
          comment: comment,
          interest:selectedOption
        })
        .then((response) => {
          if (response.data.type == "success") {
            setIsOtp(true);
            setOtp(response.data.otp);
          } else {
            setIsSubmitted(true);
            setResponse(response.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const handleOtp = (event) => {
    event.preventDefault();
    if (userOTP == newOTP) {
      axios
        .post("https://madpopo.com/verify-otp.php", {
          email: email,
          name: name,
        })
        .then((response) => {
          if (response.data.type == "success") {
            setIsSubmitted(true);
            setResponse("Congratulations, Get your Popo Swag T-Shirt!!");
            setResponse1(
              "Thank you for submitting the form. As a token of our appreciation, we've also sent you an additional discount code to use for shopping at MadPopo."
            );
            setResponse2("Happy shopping!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setOtpResponse("Invalid OTP, Try Again!");
    }
  };
  const selectHostingData = [
    {
      id: 1,
      hostingName: `WordPress Hosting`,
    },
    {
      id: 2,
      hostingName: `Managed WordPress Hosting`,
    },
    {
      id: 3,
      hostingName: `WooCommerce Hosting`,
    },
    {
      id: 4,
      hostingName: `Shared Hosting `,
    },
   
    {
      id: 5,
      hostingName: `Linux Web Hosting`,
    },
    {
      id: 6,
      hostingName: `Windows Web Hosting `,
    },
    {
      id: 7,
      hostingName: `Virtual Dedicated Server      `,
    },
    {
      id: 8,
      hostingName: `Dedicated Server`,
    },
    {
      id: 9,
      hostingName: `Business Email `,
    },
    {
      id: 10,
      hostingName: `Reseller Hosting `,
    },
    {
      id: 11,
      hostingName: `Free Domain       `,
    },
    {
      id: 12,
      hostingName: `SSL Certificate`,
    },
    {
      id: 13,
      hostingName: `Other`,
    },
  ];


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowInputBox(event.target.value === "Other");
  };

  return (
    <div className="wcasia_contactForm">
      {isSubmitted ? (
        <div>
          <p className="mb-8 font-weight-bold text-left">{formResponse}</p>
          <p className="mb-5  text-left fsz">{formResponse1}</p>
          <p className="mb-0  text-left fsz">{formResponse2}</p>
        </div>
      ) : isOtp ? (
        <form onSubmit={handleOtp} className="contact-form">
          <div className="col-md-12">
            <div className="form-group mb-7">
              <h5>Email Verification</h5>
              <p className="smallWcasiaPara font-weight-light">
                We have sent you a 4 digit code. please check your mail and
                enter the code here to complete verification.
              </p>
              <label className="coodiv-text-11 font-weight-bold text-blackish-blue w-100 ">
                OTP :
                <input
                  type="text"
                  value={userOTP}
                  onChange={(e) => setuseOtp(e.target.value)}
                  required
                  className="form-control coodiv-text-11 border"
                />
              </label>
              {otpResponse ? otpResponse : ""}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group button-block mt-3">
              <button
                type="submit"
                className="form-btn btn btn-warning d-block w-50 ml-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="col-md-12">
            <div className="form-group mb-7">
              <label className="coodiv-text-11 font-weight-bold text-blackish-blue w-100">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-control coodiv-text-11 border"
                />
              </label>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group mb-7">
              <label className="coodiv-text-11 font-weight-bold text-blackish-blue w-100">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control coodiv-text-11 border"
                />
              </label>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group mb-7">
              <label className="coodiv-text-11 font-weight-bold text-blackish-blue w-100">
                Mobile Number:
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  className="form-control coodiv-text-11 border"
                />
              </label>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group mb-7">
              <label className="coodiv-text-11 font-weight-bold text-blackish-blue w-100">
                Interest:
                {
                  //   <textarea
                  //   value={comment}
                  //   onChange={(e) => setComment(e.target.value)}
                  //   className="form-control coodiv-text-11 border"
                  // ></textarea>
                }
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="form-control mb-7 coodiv-text-11 border"
                >
                  {selectHostingData.map((hid) => (
                    <option key={hid.id} value={hid.hostingName}>
                      {hid.hostingName}
                    </option>
                  ))}
                </select>
                {showInputBox && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Interest"
                      className="form-control coodiv-text-11 border"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group button-block mt-3">
              <button
                type="submit"
                className="form-btn btn btn-warning d-block w-50 ml-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default WcForm;
