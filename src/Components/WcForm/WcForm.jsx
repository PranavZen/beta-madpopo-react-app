import React, { useState } from "react";
import axios from "axios";
function WcForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobile] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && mobileNumber) {
      axios
        .post("save-data.php", { name, email, mobileNumber, comment })
        .then((response) => {
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className="wcasia_contactForm">
      {isSubmitted ? (
        <p>Form submitted successfully!</p>
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
