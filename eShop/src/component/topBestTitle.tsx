interface TopBestTitleProps {
    onSelectStatus: (status: 'all' | 'top' | 'best') => void;
}
const TopBestTitle: React.FC<TopBestTitleProps> = ({ onSelectStatus }) => {

    return (
        <div className="flex justify-center items-center w-full mb-5">
            <div className="w-1/3">
                <div className="flex flex-col text-bestBlack items-center">
                    <div className="flex flex-row w-full justify-center">
                        <img className="w-3/4" src="./fruitsVegetables.png" alt="FruitsVegetablesTitle" />
                        <button onClick={() => onSelectStatus('all')} className="w-1/4 bg-bestGreen text-5xl rounded-xl rounded-br-xl my-5 hover:bg-transparent hover:text-bestWhite hover:border-2 hover:border-bestGreen hover:scale-95">ALL</button>
                    </div>
                    <div className="flex flex-row w-full justify-center">
                        <button onClick={() => onSelectStatus('top')} className="w-1/2 bg-bestGreen text-2xl mr-1 rounded-lg hover:bg-transparent hover:text-bestWhite hover:border-2 hover:border-bestGreen hover:scale-95">Top Featured</button>
                        <button onClick={() => onSelectStatus('best')} className="w-1/2 bg-bestGreen text-2xl ml-1 rounded-lg hover:bg-transparent hover:text-bestWhite hover:border-2 hover:border-bestGreen hover:scale-95">Best Seller</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBestTitle;
