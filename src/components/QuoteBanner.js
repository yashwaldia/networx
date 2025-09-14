import React from "react";
import "./QuoteBanner.css";

function QuoteBanner() {
  return (
    <section className="quote-banner" id="contact">
      <div className="quote-content">
        <h2>Ready to Secure Your Premises?</h2>
        <p>
          Get a free security consultation and custom quote from our certified experts.  
          Whether it's your home or business, Evis Networks builds peace of mind.
        </p>
        <a href="mailto:info@evisnetworks.com" className="quote-btn">Get Your Free Quote</a>
      </div>
    </section>
  );
}

export default QuoteBanner;
