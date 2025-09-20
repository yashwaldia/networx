import React from "react";
import "./ClientLogos.css";

const ClientLogos = () => {
  const clients = [
    {
      id: 1,
      name: "Cafeteria & Co",
      logo: "c&c.png", 
      alt: "Cafeteria & Co"
    },
    {
      id: 2,
      name: "Denso",
      logo: "denso.png", 
      alt: "Denso Corporation"
    },
    {
      id: 3,
      name: "AlukkA",
      logo: "alukka.png", 
      alt: "Client Company 3"
    },
    {
      id: 4,
      name: "CTBC",
      logo: "ctbc.png", 
      alt: "Client Company 3"
    }
  ];

  return (
    <section className="client-logos-section">
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
                  // Fallback to placeholder if logo not found
                  e.target.src = `https://via.placeholder.com/200x100/f3f4f6/6b7280?text=${client.name}`;
                }}
              />
            </div>
          ))}
        </div>

        {/* Optional: Add more clients button */}
        <div className="client-logos-footer">
          <p className="client-count">+ many more satisfied clients across Delhi NCR</p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
