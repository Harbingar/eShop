import React from 'react';

const ShopSearch: React.FC<{ onToggleView: () => void }> = ({ onToggleView }) => {
  return (
    <>
      <div className="flex flex-col items-center m-5">
        <div className="relative flex justify-center w-2/3">
          <img className="w-1/2" src="./shopSearch.png" alt="shopSearch" />
          <div className="absolute w-1/2 flex flex-row items-center justify-between" style={{ top: '80%', left: '25%' }}>
            <div className="w-4/12 h-6 flex flex-row justify-between items-center bg-bestGreen text-bestBlack rounded">
              <label htmlFor="sort" className="text-bestBlack text-SortBy text-center pl-1">Sort By:</label>
              <select className="bg-bestGreen rounded max-w-min" name="sort" id="sort">
                  <option value="null"></option>
                  <option value="element1">News</option>
                  <option value="element2">Prix</option>
                  <option value="element3">Fruits</option>
                  <option value="element4">Vegetables</option>
              </select>
            </div>
            <div className="w-7/12 flex flex-row justify-end">
                <input type="search" placeholder="Search" className="w-10/12 bg-bestWhite text-bestBlack border-transparent rounded ml-4 px-1"/>
                <button className="w-6 h-6 mx-1">
                    <img src="./loupe.png" alt="search" />
                </button>
                <button className="bg-bestGreen rounded-md w-6 h-6" onClick={onToggleView}>
                    <img src="./column.png" alt="ligne" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopSearch;
