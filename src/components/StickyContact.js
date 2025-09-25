import React, { useState } from "react";
import "./StickyContact.css";
import QuoteModal from "./QuoteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function StickyContact() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleEmailClick = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <div className="sticky-contact">
        <a href="tel:+919873300755" className="contact-icon phone">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </a>
         <a href="mailto:evisnetworx@yahoo.com" className="contact-icon email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      </div>
    </>
  );
}

export default StickyContact;
