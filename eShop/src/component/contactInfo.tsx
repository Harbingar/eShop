import React from 'react';

const ContactInfo: React.FC = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('')",
    opacity: 0.8,
    backgroundSize: 'cover',
  };

  return (
    <>
      <div className="border-2 border-bestWhite rounded-sm" style={backgroundImageStyle}>
        {/* Contenu de votre composant */}
      </div>
    </>
  );
}

export default ContactInfo;
