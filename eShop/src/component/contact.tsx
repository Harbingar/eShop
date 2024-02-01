import React from 'react';
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
        <img className="w-1/2 mb-20" src="./contact.png" alt="ContactTitle" />
        <div className="flex flex-row justify-around items-start">
            <ContactForm/>
            <ContactInfo/>
        </div>
    </div>
    
  );
}

export default Contact;
