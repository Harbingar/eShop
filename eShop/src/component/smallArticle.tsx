import React, { useState } from 'react';
import { SaleArticle, NewArticle, OutArticle} from "./statutArticle";

interface TopBestProps {
  imgSrc: string;
  productName: string;
  price: string;
  type: 'fruit' | 'vegetable';
  status: 'best' | 'top';
  stock: 'sale' | 'new' | 'out';
}

const SmallArticle: React.FC<TopBestProps> = ({ imgSrc, productName, price, status, stock }) => {
    const [isHovered, setIsHovered] = useState(false);

    const renderStockStatus = () => {
        switch(stock) {
          case 'sale':
            return <SaleArticle />;
          case 'new':
            return <NewArticle />;
          case 'out':
            return <OutArticle />;
          default:
            return null;
        }
    };

    return (
        <div className={`flex flex-col w-2/3 relative ${status === 'top' ? 'top-style' : 'best-style'}`}>
            <div
                className="relative group transition-transform transform hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={imgSrc} alt="product" />
                <div className={`absolute top-0 right-0 m-2 ${status === 'top' ? 'bg-topColor text-topText' : 'bg-bestColor text-bestText'}`}>
                    {renderStockStatus()}
                </div>

                {isHovered && (
                    <div className="absolute inset-0 flex flex-col items-center justify-evenly bg-black bg-opacity-80 transition-opacity">
                        <button className="text-bestWhite text-3xl hover:text-bestGreen">
                            See More
                        </button>
                        <button className="text-bestGreen underline text-3xl hover:text-bestWhite">
                            Add to Cart
                        </button>
                    </div>
                )}
            </div>
            <div className="flex flex-col bg-bestDark text-bestWhite px-3">
                <div className="flex items-start text-xl">
                    <h1>{productName}</h1>
                </div>
                <div className="flex justify-end text-xl">
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    );
};

export default SmallArticle;