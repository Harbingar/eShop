
const welcomeTitle: React.FC = () => {

    return (
        <div className="relative w-1/2">
            <img className="w-full" src="./freshShopTitle.png" alt="Title" />
            <button className="absolute bg-bestGreen text-bestBlack hover:border-2 hover:scale-105 hover:border-bestGreen hover:text-bestWhite hover:bg-transparent px-1 rounded-md text-6xl" 
                    style={{ top: '65%', left: '70%'}}>
                <a href="#">News</a>
            </button>
        </div>
    );
  };
  
  export default welcomeTitle;
  