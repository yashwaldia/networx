import React, { useEffect, useRef, useState } from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    review:
      "Evis Networx transformed our office security. Reliable, fast service and great customer support!",
    name: "Rahul Sharma",
    role: "Business Owner, East of Kailash",
  },
  {
    review:
      "CCTV installation was smooth, and their team gave excellent advice. Highly recommended!",
    name: "Priya Kapoor",
    role: "Homeowner, Delhi",
  },
  {
    review:
      "Professional technicians, great pricing, routine checks—peace of mind and safety for our shop.",
    name: "Mukesh Verma",
    role: "Shop Manager, Sant Nagar",
  },
  {
    review:
      "Outstanding fire alarm installation and excellent after-sales support. Very professional team!",
    name: "Anjali Singh",
    role: "Property Manager, Delhi",
  },
  {
    review:
      "Quick response time and quality equipment. Best security service provider in East Delhi!",
    name: "Deepak Kumar",
    role: "Restaurant Owner, Sant Nagar",
  },
];

function TestimonialsSection() {
  const allTestimonials = [...testimonials, ...testimonials];

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
      className={`testimonials-section ${visible ? "animate-fade-in" : "hidden"}`}
      id="testimonials"
      ref={sectionRef}
    >
      <h2>Testimonies</h2>
      <div className="testimonials-container">
        <div className="testimonials-track">
          {allTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-review">"{testimonial.review}"</p>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
