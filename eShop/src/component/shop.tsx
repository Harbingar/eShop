import React, { useState } from 'react';
import Search from "./shopSearch";
import SmallArticle from './smallArticle';
import BigArticle from './bigArticle';
import { ArticleData } from '../interface/articleInterface';

const articlesData: ArticleData[] = [
  { imgSrc: './img-pro-01.jpg', productName: 'Carrots', price: '$0.20', type: 'vegetable', status: 'top', stock: 'sale', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './img-pro-02.jpg', productName: 'Tomatoes', price: '$0.50', type: 'fruit', status: 'best', stock: 'new', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './img-pro-03.jpg', productName: 'Graps', price: '$3.50', type: 'fruit', status: 'best', stock: 'new', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './instagram-img-04.jpg', productName: 'Citron', price: '$0.99', type: 'fruit', status: 'top', stock: 'out', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './img-pro-04.jpg', productName: 'Papaya', price: '$10', type: 'fruit', status: 'best', stock: 'sale', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './instagram-img-05.jpg', productName: 'Cherry', price: '$0.10', type: 'fruit', status: 'top', stock: 'sale', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './instagram-img-06.jpg', productName: 'Orange', price: '$1', type: 'fruit', status: 'best', stock: 'sale', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './instagram-img-07.jpg', productName: 'Pumpkin', price: '$7', type: 'fruit', status: 'top', stock: 'new', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './instagram-img-08.jpg', productName: 'Strawberry', price: '$0.15', type: 'fruit', status: 'top', stock: 'sale', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { imgSrc: './instagram-img-09.jpg', productName: 'Bays', price: '$2', type: 'fruit', status: 'top', stock: 'out', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  
];

const Shop: React.FC = () => {
    const [showBigArticle, setShowBigArticle] = useState(false);
  
    const toggleArticleView = () => {
      setShowBigArticle(!showBigArticle);
    };
  
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <Search onToggleView={toggleArticleView} />
          {showBigArticle ? (
            <div className="flex flex-col w-screen">
              {articlesData.map((article, index) => (
                <div key={index} className="flex justify-center">
                  <BigArticle
                    imgSrc={article.imgSrc}
                    productName={article.productName}
                    price={article.price}
                    type={article.type}
                    status={article.status}
                    stock={article.stock}
                    description={article.description}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-4 mx-auto my-5">
              {articlesData.map((article, index) => (
                <div key={index} className="flex justify-center">
                  <SmallArticle
                    imgSrc={article.imgSrc}
                    productName={article.productName}
                    price={article.price}
                    type={article.type}
                    status={article.status}
                    stock={article.stock}
                    description={article.description}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
  
export default Shop;