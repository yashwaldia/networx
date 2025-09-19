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
        <a href="tel:+918047812042" className="contact-icon phone">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </a>
        <button className="contact-icon email" onClick={handleEmailClick}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>

      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedService="General Security Services"
      />
    </>
  );
}

export default StickyContact;
