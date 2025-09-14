import React from "react";
import "./StickyContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function StickyContact() {
  return (
    <div className="sticky-contact">
      <a href="tel:+911234567890" className="contact-icon phone" title="Call Us">
        <FontAwesomeIcon icon={faPhoneAlt} />
      </a>
      <a href="mailto:info@evisnetworks.com" className="contact-icon email" title="Email Us">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default StickyContact;
