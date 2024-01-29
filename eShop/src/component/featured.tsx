
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Article from "./smallArticle";
import { ArticleData } from '../interface/articleInterface';

const articlesData: ArticleData[] = [
{ imgSrc: './img-pro-01.jpg', productName: 'Carrots', price: '$0.20', type: 'vegetable', status: 'top', stock: 'sale', description:"" },
{ imgSrc: './img-pro-02.jpg', productName: 'Tomatoes', price: '$0.50', type: 'fruit', status: 'best', stock: 'new', description:"" },
{ imgSrc: './img-pro-03.jpg', productName: 'Graps', price: '$3.50', type: 'fruit', status: 'best', stock: 'new', description:"" },
{ imgSrc: './instagram-img-04.jpg', productName: 'Citron', price: '$0.99', type: 'fruit', status: 'top', stock: 'out', description:"" },
{ imgSrc: './img-pro-04.jpg', productName: 'Papaya', price: '$10', type: 'fruit', status: 'best', stock: 'sale', description:"" },
{ imgSrc: './instagram-img-05.jpg', productName: 'Cherry', price: '$0.10', type: 'fruit', status: 'top', stock: 'sale', description:"" },
{ imgSrc: './instagram-img-06.jpg', productName: 'Orange', price: '$1', type: 'fruit', status: 'best', stock: 'sale', description:"" },
{ imgSrc: './instagram-img-08.jpg', productName: 'Srawberry', price: '$7', type: 'fruit', status: 'top', stock: 'sale', description:"" },
{ imgSrc: './instagram-img-09.jpg', productName: 'Bays', price: '$7', type: 'fruit', status: 'top', stock: 'sale', description:"" },
{ imgSrc: './instagram-img-07.jpg', productName: 'Pumpkin', price: '$7', type: 'fruit', status: 'top', stock: 'sale', description:"" },
];

const VISIBLE_ARTICLES = 5;

const Featured: React.FC = () => {
const [startIndex, setStartIndex] = useState(0);
const [direction, setDirection] = useState<'left' | 'right'>('right');

const visibleArticles = articlesData.slice(startIndex, startIndex + VISIBLE_ARTICLES);

const goLeft = () => {
    if (startIndex > 0) {
    setStartIndex(startIndex - 1);
    setDirection('left');
    }
};

const goRight = () => {
    if (startIndex < articlesData.length - VISIBLE_ARTICLES) {
    setStartIndex(startIndex + 1);
    setDirection('right');
    }
};

const animation = useSpring({
    from: {
    opacity: 0,
    transform: `translateX(${direction === 'left' ? '100%' : '-100%'})`,
    },
    to: {
    opacity: 1,
    transform: 'translateX(0)',
    },
    reset: true,
});

return (
    <>
    <div className="grid grid-cols-5 gap-4 mx-auto my-5">
        {visibleArticles.map((article, index) => (
        <animated.div key={index} className="flex justify-center" style={animation}>
            <Article
            imgSrc={article.imgSrc}
            productName={article.productName}
            price={article.price}
            type={article.type}
            status={article.status}
            stock={article.stock}
            description={article.description}
            />
        </animated.div>
        ))}
    </div>
    <div className="flex justify-center space-x-4">
        <button onClick={goLeft}>Précédent</button>
        <button onClick={goRight}>Suivant</button>
    </div>
    </>
);
}

export default Featured;