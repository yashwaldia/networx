import React, { useEffect, useRef, useState } from "react";
import "./ClientLogos.css";

const ClientLogos = () => {
  const clients = [
    {
      id: 1,
      name: "Cafeteria & Co",
      logo: "c&c.png",
      alt: "Cafeteria & Co",
    },
    {
      id: 2,
      name: "Denso",
      logo: "denso.png",
      alt: "Denso Corporation",
    },
    {
      id: 3,
      name: "AlukkA",
      logo: "alukka.png",
      alt: "Client Company 3",
    },
    {
      id: 4,
      name: "CTBC",
      logo: "ctbc.png",
      alt: "Client Company 3",
    },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className={`client-logos-section ${visible ? "animate-fade-in" : "hidden"}`}
      ref={sectionRef}
    >
      <div className="client-logos-container">
        <div className="client-logos-header">
          <h2>Trusted by Leading Companies</h2>
          <p>We've proudly served businesses across Delhi NCR with reliable security solutions</p>
        </div>

        <div className="client-logos-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-logo-item">
              <img
                src={client.logo}
                alt={client.alt}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/200x100/f3f4f6/6b7280?text=${client.name}`;
                }}
              />
            </div>
          ))}
        </div>

        <div className="client-logos-footer">
          <p className="client-count">+ many more satisfied clients across Delhi NCR</p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
