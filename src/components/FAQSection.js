import React, { useState, useEffect, useRef } from "react";
import "./FAQSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faShieldAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    question: "Can Evis Security Networx help in choosing the right camera?",
    answer:
      "Yes, Evis Security Networx can help you out provided you share your specific requirements with them. Our experts will recommend the most suitable CCTV camera for your property or business needs.",
  },
  {
    question: "How much does CCTV installation cost?",
    answer:
      "The price of installing a CCTV system varies depending on the model, brand, number of units to be installed, and many other factors. The pricing will increase with the level of service quality provided by the dealer.",
  },
  {
    question: "Do you take bulk orders?",
    answer:
      "Yes, we take bulk orders. Kindly confirm the time of delivery at the time of placing your order. We serve businesses and residential complexes with competitive pricing.",
  },
  {
    question: "What products and services do you offer?",
    answer:
      "We provide CCTV Cameras, Fire Alarm Systems, Biometric Systems, Digital Door Locks, EPABX Systems, and PA Systems. We also offer installation, maintenance, and after-sales support.",
  },
  {
    question: "Do you provide after-sales service?",
    answer:
      "Yes, we provide comprehensive after-sales service including maintenance, repairs, and technical support for all our security systems and products.",
  },
];

const usps = [
  {
    value: "400+",
    label: "Satisfied Clients",
    icon: faUsers,
    accent: "#3b82f6",
  },
  {
    value: "100%",
    label: "Secure & Safe",
    icon: faCheckCircle,
    accent: "#10b981",
  },
  {
    value: "20+",
    label: "Years Experience",
    icon: faShieldAlt,
    accent: "#f59e0b",
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const [showTopContent, setShowTopContent] = useState(false);
  const [showProfessionalExcellence, setShowProfessionalExcellence] = useState(false);

  const topContentRef = useRef(null);
  const professionalRef = useRef(null);

  useEffect(() => {
    const topObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowTopContent(true);
            topObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const profObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowProfessionalExcellence(true);
            profObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (topContentRef.current) {
      topObserver.observe(topContentRef.current);
    }
    if (professionalRef.current) {
      profObserver.observe(professionalRef.current);
    }

    return () => {
      if (topContentRef.current) topObserver.unobserve(topContentRef.current);
      if (professionalRef.current) profObserver.unobserve(professionalRef.current);
    };
  }, []);

  function toggle(idx) {
    setOpenIdx(openIdx === idx ? null : idx);
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {/* Top Section */}
        <div
          className={`faq-top-content ${showTopContent ? "animate-fade-in" : "hidden"}`}
          ref={topContentRef}
        >
          {/* FAQ left */}
          <div className="faq-left">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-item ${openIdx === idx ? "open" : ""}`}
                  onClick={() => toggle(idx)}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <span className="faq-toggle">{openIdx === idx ? "–" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${openIdx === idx ? "show" : ""}`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us right */}
          <div className="faq-right">
            <h2>Why Choose Evis Networx?</h2>
            <p className="usp-subtitle">
              Trusted security solutions with proven expertise and reliable service
            </p>
            <div className="usps-grid">
              {usps.map((usp, idx) => (
                <div key={idx} className="usp-card">
                  <div className="usp-icon" style={{ background: usp.accent }}>
                    <FontAwesomeIcon icon={usp.icon} />
                  </div>
                  <div className="usp-content">
                    <h3>{usp.value}</h3>
                    <p>{usp.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Excellence */}
        <div
          className={`professional-excellence ${showProfessionalExcellence ? "animate-fade-in" : "hidden"}`}
          ref={professionalRef}
        >
          <div className="excellence-content">
            <h3>Professional Excellence</h3>
            <p>
              Our certified team of security professionals brings years of experience{" "}
              to every installation. We provide comprehensive support from consultation{" "}
              to maintenance, ensuring your security systems operate at peak performance.
            </p>
            <div className="excellence-features">
              <div className="feature-item">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Certified Installation Team</span>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>24/7 Technical Support</span>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Warranty & Maintenance</span>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Quality Assurance</span>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Expert Consultation</span>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
