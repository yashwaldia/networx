import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const heroSlides = [
  {
    image: "cctv.png",
    title: "Your Security.",
    subtitle: "Our Priority.",
    description: "Protecting what matters most with advanced CCTV cameras, fire alarms, and access control systems. Professional installation and 24/7 monitoring for complete peace of mind.",
    buttonText: "Learn More",
    buttonLink: "https://www.pelco.com/blog/cctv-monitoring-guide",
    serviceType: "CCTV Camera System"
  },
  {
    image: "fire.png",
    title: "Fire Safety Systems",
    subtitle: "Early Detection. Rapid Response.",
    description: "Comprehensive fire detection systems with intelligent smoke sensors and heat detectors. Protecting lives and property with advanced fire safety solutions that respond instantly to threats.",
    buttonText: "Discover More",
    buttonLink: "https://hrsschicago.com/fire-alarm-systems/fire-safety-systems-early-warning-prevent-disasters/",
    serviceType: "Fire Alarm System"
  },
  {
    image: "smart.png",
    title: "Smart Access Control",
    subtitle: "Secure. Simple. Smart.",
    description: "Revolutionary biometric systems and digital locks that provide seamless access control. Manage who enters your premises with cutting-edge fingerprint and card-based technology.",
    buttonText: "Read Guide",
    buttonLink: "https://www.getveris.com/blog/biometric-access-control-systems",
    serviceType: "Biometric System"
  },
  {
    image: "total.png",
    title: "Complete Protection",
    subtitle: "One Solution. Total Security.",
    description: "From advanced CCTV surveillance to fire alarms and communication systems. Your trusted security partner delivering comprehensive protection solutions across Delhi and NCR.",
    buttonText: "Explore Solutions",
    buttonLink: "https://www.movantech.com/blog/cctv-implementation-guide-2025-complete-enterprise-surveillance-system-setup",
    serviceType: "Complete Security Package"
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const changeSlide = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setTimeout(() => setIsAnimating(false), 600);
    }, 300);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % heroSlides.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    changeSlide(newIndex);
  };

  const handleLearnMore = () => {
    window.open(heroSlides[currentSlide].buttonLink, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className={`hero-section ${visible ? "animate-fade-in" : "hidden"}`}
      ref={heroRef}
    >
      <div className="hero-container">
        <div className={`hero-content ${isAnimating ? 'slide-out' : 'slide-in'}`}>
          <h1>
            <span className="hero-title-main">{heroSlides[currentSlide].title}</span>
            <span className="hero-title-accent">{heroSlides[currentSlide].subtitle}</span>
          </h1>
          <p>{heroSlides[currentSlide].description}</p>
          <button className="hero-btn hero-learn-btn" onClick={handleLearnMore}>
            {heroSlides[currentSlide].buttonText}
            <FontAwesomeIcon icon={faExternalLinkAlt} className="hero-btn-icon" />
          </button>
          <div className="hero-navigation">
            <button className="hero-nav-btn" onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="hero-indicators">
              {heroSlides.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => changeSlide(index)}
                />
              ))}
            </div>
            <button className="hero-nav-btn" onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className={`hero-image-container ${isAnimating ? 'slide-out' : 'slide-in'}`}>
          <div className="hero-image-3d">
            <img
              src={heroSlides[currentSlide].image}
              alt={`${heroSlides[currentSlide].serviceType} - Professional Security Solutions Delhi NCR`}
            />
            <div className="image-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
