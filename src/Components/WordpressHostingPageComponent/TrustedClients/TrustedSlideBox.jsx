import React from "react";

function TrustedSlideBox(props) {
  return (
    <div className="sliderBoxWrap">
      <div className="clintProfile">
        <img src={props.clientImage} alt="Client Pictures" />
      </div>
      <h3>{props.clientName}</h3>
      <p>{props.clientDescription}</p>
      <div className="clientTestimonial">
        <p>{props.clientPara}</p>
      </div>
    </div>
  );
}

export default TrustedSlideBox;
