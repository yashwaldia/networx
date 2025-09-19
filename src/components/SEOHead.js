import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Evis Security Networks - CCTV, Fire Alarm & Security Systems in Delhi NCR",
  description = "Leading security solutions provider in Delhi NCR. Professional CCTV cameras, fire alarm systems, biometric access control, and digital door locks installation. 10+ years experience.",
  keywords = "CCTV camera Delhi, fire alarm system, biometric system, digital door lock, security systems Delhi NCR, EPABX system, PA system, access control",
  canonicalUrl = "",
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd = null,
  noIndex = false
}) => {
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;
  const siteName = "Evis Security Networks";
  
  // Default JSON-LD for local business
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "SecuritySystem",
    "name": "Evis Security Networks",
    "image": "https://yourwebsite.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "telephone": "+91-9876543210",
    "email": "info@evissecuritynetworks.com",
    "url": "https://yourwebsite.com",
    "openingHours": [
      "Mo-Sa 09:00-18:00"
    ],
    "areaServed": [
      "Delhi",
      "NCR",
      "Gurgaon",
      "Noida",
      "Faridabad",
      "Ghaziabad"
    ],
    "serviceType": [
      "CCTV Installation",
      "Fire Alarm System",
      "Biometric System",
      "Digital Door Lock",
      "EPABX System",
      "Access Control System"
    ],
    "priceRange": "₹₹₹",
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Founder Name"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Evis Security Networks" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@evissecurity" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
      
      {/* Additional Security Business Meta Tags */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="New Delhi" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Helmet>
  );
};

export default SEOHead;
