import React, { useState } from 'react';
import TopBestTitle from './topBestTitle';
import SmallArticle from './smallArticle';
import { ArticleData } from '../interface/topBestInterface';

const articlesData: ArticleData[] = [
  { imgSrc: './img-pro-01.jpg', productName: 'Carrots', price: '$0.20', type: 'vegetable', status: 'top', stock: 'sale' },
  { imgSrc: './img-pro-02.jpg', productName: 'Tomatoes', price: '$0.50', type: 'fruit', status: 'best', stock: 'new' },
  { imgSrc: './img-pro-03.jpg', productName: 'Graps', price: '$3.50', type: 'fruit', status: 'best', stock: 'new' },
  { imgSrc: './instagram-img-04.jpg', productName: 'Citron', price: '$0.99', type: 'fruit', status: 'top', stock: 'out' },
  { imgSrc: './img-pro-04.jpg', productName: 'Papaya', price: '$10', type: 'fruit', status: 'best', stock: 'sale' },
  { imgSrc: './instagram-img-05.jpg', productName: 'Cherry', price: '$0.10', type: 'fruit', status: 'top', stock: 'sale' },
  { imgSrc: './instagram-img-06.jpg', productName: 'Orange', price: '$1', type: 'fruit', status: 'best', stock: 'sale' },
  { imgSrc: './instagram-img-07.jpg', productName: 'Pumpkin', price: '$7', type: 'fruit', status: 'top', stock: 'sale' },
];

const App: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'top' | 'best'>('all');

  const filterArticles = (status: 'all' | 'top' | 'best') => {
    setSelectedStatus(status);
  };

  const filteredArticles = selectedStatus === 'all'
    ? articlesData
    : articlesData.filter(article => article.status === selectedStatus);

  return (
    <>
        <div className="min-h-screen">
            <TopBestTitle onSelectStatus={filterArticles} />

            <div className="container mx-auto py-5">
                <div className="flex flex-wrap justify-center gap-2">
                    {filteredArticles.map((article, index) => (
                        <div key={index} className="flex justify-center items-center w-1/5 py-3">
                            <SmallArticle
                                imgSrc={article.imgSrc}
                                productName={article.productName}
                                price={article.price}
                                type={article.type}
                                status={article.status}
                                stock={article.stock}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </>
    
  );
};

export default App;
