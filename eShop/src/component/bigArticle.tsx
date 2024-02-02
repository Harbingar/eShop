import { SaleArticle, NewArticle, OutArticle} from "./statutArticle";
import { ArticleData } from '../interface/articleInterface';
import { Link } from 'react-router-dom';

const bigArticle: React.FC<ArticleData> = ({ imgSrc, productName, price, status, stock, description }) => {

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
        <div className={`flex flex-row w-2/3 my-5 relative ${status === 'top' ? 'top-style' : 'best-style'}`}>
            <img className="w-56 rounded-sm" src={imgSrc} alt="product" />
            <div className={`absolute top-0 left-0 m-2 ${status === 'top' ? 'bg-topColor text-topText' : 'bg-bestColor text-bestText'}`}>
                {renderStockStatus()}
            </div>
            <div className="flex flex-col w-full ml-5">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-end">
                        <h1 className="text-bestWhite text-7xl">{productName}</h1>
                        <h2 className="text-bestBlack bg-bestGreen text-4xl mx-2 mb-2 px-3 rounded">{price}</h2>
                    </div>
                    <div className="flex item-center justify-end">
                        <input type="number" value="1" className="bg-bestBlack text-bestGreen w-1/6 border-b-2 border-bestGreen text-center text-2xl no-arrows"/>
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-5">
                    <p className="text-bestWhite text-xl">{description}</p>
                    <div className="flex flex-row justify-end">
                        <Link className="text-bestWhite underline text-right text-2xl mt-2 px-3" to="/Product">See More</Link>
                        <a className="text-bestGreen underline text-right text-2xl mt-2" href="#">Add to Card</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default bigArticle;
