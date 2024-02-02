import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Article: React.FC = () => {
  const [currentImage, setCurrentImage] = useState('./instagram-img-01.jpg');
  const thumbnails = ['./instagram-img-01.jpg', './instagram-img-02.jpg', './instagram-img-03.jpg'];

  return (
    <>
      <div className="w-full flex flex-row justify-center py-20">
        <div className="flex w-fit items-center flex-col">
            <img className="w-3/4 rounded-lg" src={currentImage} alt="product" />
            <div className="flex justify-center mt-1">
                {thumbnails.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    alt={`thumbnail-${index}`}
                    className="w-8 cursor-pointer mx-1"
                    onClick={() => setCurrentImage(image)}
                    />
                ))}
            </div>
        </div>
        <div className="w-1/3 flex flex-col text-bestWhite pt-5">
          <h1 className="text-6xl">Title</h1>
          <h2 className="my-2 bg-bestGreen text-bestBlack w-fit px-2 rounded-lg text-2xl">Price</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ratione est eaque impedit adipisci ut rerum placeat maxime doloremque quasi molestias illum velit ipsa, eligendi aut accusantium fugiat atque blanditiis.</p>
        </div>
        <div className="w-fit flex flex-col p-5">
          <div>
            <h2 className="bg-bestGreen text-bestBlack w-fit px-1 rounded-t-sm">Quantity</h2>
            <input type="number" value="1" className="text-center text-bestWhite no-arrows border-bestGreen border-2 bg-transparent rounded-b-sm rounded-tr-sm" />
          </div>
          <div className="flex flex-row justify-between my-3">
            <button className="bg-bestGreen text-bestBlack rounded-sm text-xl px-1"><Link className="" to="/Wishlist">Wishlist</Link></button>
            <button className="underline text-bestWhite text-xl px-1">Add to card</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
