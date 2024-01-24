import React from 'react';

interface OfferProps {
    title: string;
    description: string;
    imageSrc: string;
}

const Offer: React.FC<OfferProps> = ({ title, description, imageSrc }) => {
  return (
    <div className='m-5 flex flex-col items-center'>
        <div className="flex flex-row  h-max w-20px">
            <img className="rounded-lg w-1/6 h-1/6" src={imageSrc} alt={title} />
            <div className="flex flex-col h-5/6 py-2 bg-bestGreen justify-center px-3 mx-2 rounded-tl-50 rounded-tr-150 rounded-br-300">
                <h1 className='text-bestWhite text-2xl'>{title}</h1>
                <p className='text-bestWhite text-sm'>{description}</p>
            </div>
        </div>
    </div>
  );
}

export default Offer;
