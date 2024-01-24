import React from 'react';
import Offer from "./offer";

const offersData = [
  {
    title: "Healthy Eating",
    description: "Of course, here's a paragraph on healthy eating in English: Healthy eating is essential for maintaining good physical and mental health. This involves consuming a variety of nutritious foods, including fruits, vegetables, whole grains, lean proteins, and low-fat dairy products.",
    imageSrc: "./categories_img_01.jpg"
  },
  {
    title: "Healthy Eating",
    description: "Of course, here's a paragraph on healthy eating in English: Healthy eating is essential for maintaining good physical and mental health. This involves consuming a variety of nutritious foods, including fruits, vegetables, whole grains, lean proteins, and low-fat dairy products.",
    imageSrc: "./categories_img_02.jpg"
  },
  {
    title: "Healthy Eating",
    description: "Of course, here's a paragraph on healthy eating in English: Healthy eating is essential for maintaining good physical and mental health. This involves consuming a variety of nutritious foods, including fruits, vegetables, whole grains, lean proteins, and low-fat dairy products.",
    imageSrc: "./categories_img_03.jpg"
  },

];

const offers: React.FC = () => {
  return (

    <>
    <div className="flex flex-row w-full h-full">
      <div className="w-3/5 h-full">
        {offersData.map((offer, index) => (
          <Offer
            key={index}
            title={offer.title}
            description={offer.description}
            imageSrc={offer.imageSrc}
          />
        ))}
      </div>
      <div className="w-2/5 flex flex-col items-center">
        <img className="w-1/2" src="./visitOurOffer.png" alt="OurOffers" />
        <img className="w-1/2 rounded-tl-75 rounded-tr-300 rounded-bl-150 rounded-br-50 py-3" src="./add-img-01.jpg" alt="OurOffers" />
        <img className="w-1/2 rounded-tl-100 rounded-tr-75 rounded-bl-300 rounded-br-150" src="./add-img-02.jpg" alt="OurOffers" />
      </div>
    </div>
    </>
  );
}

export default offers;