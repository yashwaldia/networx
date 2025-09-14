import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=400&q=80",
    title: "Security. Supercharged.",
    subtitle: "Just add Evis.",
    description: "Intelligent, adaptable security cameras and sensors. Devices that enhance any system and perform in any environment.",
    buttonText: "Discover Solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&h=400&q=80",
    title: "Fire Safety Systems",
    subtitle: "Early Detection Technology",
    description: "Built on an open platform, our fire detection devices plug into any system for scalable, future-proof safety.",
    buttonText: "Learn More"
  },
  {
    image: "https://images.unsplash.com/photo-1586092918161-2d8882ab35b6?auto=format&fit=crop&w=600&h=400&q=80",
    title: "Access Control Solutions",
    subtitle: "Smart & Secure",
    description: "Designed with privacy in mind, our access control systems help you protect areas with intelligent monitoring.",
    buttonText: "Explore Features"
  },
  {
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=600&h=400&q=80",
    title: "Complete Protection",
    subtitle: "Advanced Monitoring",
    description: "See further in any condition with high-performance cameras offering precise views and comprehensive security coverage.",
    buttonText: "Get Started"
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className={`hero-content ${isAnimating ? 'slide-out' : 'slide-in'}`}>
          <h1>
            <span className="hero-title-main">{heroSlides[currentSlide].title}</span>
            <br />
            <span className="hero-title-accent">{heroSlides[currentSlide].subtitle}</span>
          </h1>
          <p>{heroSlides[currentSlide].description}</p>
          <button className="hero-btn">{heroSlides[currentSlide].buttonText}</button>
          
          <div className="hero-navigation">
            <button className="hero-nav-btn" onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <div className="hero-indicators">
              {heroSlides.map((_, index) => (
                <button
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
            <img src={heroSlides[currentSlide].image} alt="Security Solution" />
            <div className="image-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
