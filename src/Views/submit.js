import React from "react";
import { Button, Card, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import success from "../images/mail.svg";

function Submit() {
  const navigate = useNavigate();
  return (
    <div className="submit-page">
    <div className="submit-page__container">
      <div className="submit-page_container_image">
        <img
          className="submit-page_containerimage_img"
          src={success}
          alt=""
        />
      </div>
      <div className="submit-page_container_text">
        <h3>Test submitted successfully!</h3>
      </div>
      <div className="submit-page_container_logout">
        <button className="submit-page_container_logout-btn" onClick={()=>navigate("/")}>Logout</button>
      </div>
    </div>
  </div>
  );
}

export default Submit;
