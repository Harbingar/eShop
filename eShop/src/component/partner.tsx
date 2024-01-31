import React from 'react';
import { Partner } from '../interface/partnerInterface';

interface PartnerProps {
  partner: Partner;
}

const Partners: React.FC<PartnerProps> = ({ partner }) => {
  return (
    <div className="border-2 py-1 mb-5 border-bestGreen text-bestWhite rounded-md flex flex-col justify-center items-center">
      <h1 className="text-3xl py-3 px-3">{partner.title}</h1>
      {partner.texts.map((text, index) => (
        <h3 className="px-4" key={index}>{text}</h3>
      ))}
    </div>
  );
}

export default Partners;
