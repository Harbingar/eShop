import React from 'react';

const shopSearch: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img className="w-4/12" src="./shopSearch.png" alt="shopSearch" />
        <div className="flex flex-row items-center justify-between">
            <select name="sort" id="sort" className="w-1/3 bg-bestGreen text-bestBlack  rounded">
                <option value="element3">News</option>
                <option value="element1">Prix</option>
                <option value="element2">Fruits</option>
                <option value="element3">Vegetables</option>
            </select>
            <div className="w-1/12 h-full">

            </div>
            <div className="w-6/12 flex flex-row">
                <input type="search" placeholder="Search" className="bg-bestWhite rounded px-1"/>
                    <button className="w-full">
                        <img src="./loupe.png" alt="search" />
                    </button>
                    <button className="bg-bestGreen rounded-md w-full">
                        <img src="./ligne.png" alt="ligne" />
                    </button>

            </div>
        </div>

      </div>
    </>
  );
}

export default shopSearch;
