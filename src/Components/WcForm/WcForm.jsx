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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && mobileNumber) {
      axios
        .post("https://madpopo.com/save-data.php", { name:name, email:email, mobileNumber:mobileNumber, comment:comment })
        .then((response) => {
          if(response.data.type=='success'){
            setIsOtp(true);
            setOtp(response.data.otp);
          }else{
            setIsSubmitted(true);
            setResponse(response.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const handleOtp = (event) =>{
    event.preventDefault();
    if(userOTP == newOTP){ 
      axios
      .post("https://madpopo.com/verify-otp.php", {email:email,name:name})
      .then((response) => {
        if(response.data.type=='success'){
          setIsSubmitted(true);
          setResponse("Congratulations, Get your Popo Swag T-Shirt!!");
          setResponse1("Thank you for submitting the form. As a token of our appreciation, we've also sent you an additional discount code to use for shopping at MadPopo.");
          setResponse2("Happy shopping!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }else{
      setOtpResponse("Invalid OTP, Try Again!");
    }
  }
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
              <label className="coodiv-text-11 font-weight-bold text-blackish-blue w-100">
                OTP:
                <input
                  type="text"
                  value={userOTP}
                  onChange={(e) => setuseOtp(e.target.value)}
                  required
                  className="form-control coodiv-text-11 border"
                />
              </label>
              {otpResponse?otpResponse:''}
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
                Comment:
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="form-control coodiv-text-11 border"
                ></textarea>
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
