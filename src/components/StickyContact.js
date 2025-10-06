import React, { useState, useEffect } from "react";
import "./StickyContact.css";
import QuoteModal from "./QuoteModal";


function StickyContact() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    // Wait for Botpress to be ready
    const initBotpress = () => {
      if (window.botpress) {
        window.botpress.init({
          "botId": "323ff3c1-69c0-4d61-aa73-27448d608c90",
          "configuration": {
            "version": "v2",
            "botName": "Evis Networx Chatbot",
            "botAvatar": "https://files.bpcontent.cloud/2025/10/06/17/20251006170240-ZVZ3FJ9C.png",
            "botDescription": "24/7 Customer support",
            "website": {},
            "email": {
              "title": "evisnetworx@yahoo.com",
              "link": "evisnetworx@yahoo.com"
            },
            "phone": {
              "title": "919873300755",
              "link": "919873300755"
            },
            "termsOfService": {},
            "privacyPolicy": {},
            "color": "#294972",
            "variant": "solid",
            "headerVariant": "solid",
            "themeMode": "light",
            "fontFamily": "inter",
            "radius": 3,
            "feedbackEnabled": false,
            "footer": "[⚡ by Botpress](https://botpress.com/?from=webchat)",
            "soundEnabled": false,
            "proactiveMessageEnabled": false,
            "proactiveBubbleMessage": "Hi! 👋 Need help?",
            "proactiveBubbleTriggerType": "afterDelay",
            "proactiveBubbleDelayTime": 10
          },
          "clientId": "72dd1925-5f70-4b4d-9a4b-e547c72e97c5"
        });
      }
    };

    // Check if Botpress is already loaded
    if (window.botpress) {
      initBotpress();
    } else {
      // Wait for script to load
      const checkBotpress = setInterval(() => {
        if (window.botpress) {
          clearInterval(checkBotpress);
          initBotpress();
        }
      }, 100);

      return () => clearInterval(checkBotpress);
    }
  }, []);



  return (
    <>
      {isQuoteModalOpen && (
        <QuoteModal onClose={() => setIsQuoteModalOpen(false)} />
      )}
    </>
  );
}

export default StickyContact;
