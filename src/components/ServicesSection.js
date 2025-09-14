import React from "react";
import "./ServicesSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faFireExtinguisher, faUserShield } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faCamera,
    title: "CCTV & Surveillance",
    description: "Advanced camera systems for reliable property monitoring and crime prevention.",
    accent: "#06b6d4",
  },
  {
    icon: faFireExtinguisher,
    title: "Fire Alarms & Safety",
    description: "Industry-standard alarms for fast fire detection and rapid emergency response.",
    accent: "#36c2b4",
  },
  {
    icon: faUserShield,
    title: "Security Guard Services",
    description: "Trained, certified personnel ensuring physical protection and peace of mind.",
    accent: "#4c70ff",
  },
];

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <h2>What We Offer For Our Customers</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <span
              className="service-icon"
              style={{ background: service.accent }}
            >
              <FontAwesomeIcon icon={service.icon} />
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="service-btn">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
