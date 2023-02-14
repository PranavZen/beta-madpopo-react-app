import React, { useState } from "react";

function WcForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, mobileNumber, comment };
    fetch("save_data.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Do something with the response data
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="col-md-12">
          <div className="form-group mb-7">
            <label
               className="coodiv-text-11 font-weight-bold text-blackish-blue w-100"
            >
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
                onChange={(e) => setMobileNumber(e.target.value)}
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
            fdprocessedid="fvvd0o"
          >
          Submit
          </button>
        </div>
      </div>
       
      </form>
    </div>
  );
}

export default WcForm;
