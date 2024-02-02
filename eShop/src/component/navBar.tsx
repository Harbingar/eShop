import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(prevState => !prevState);
  };

  return (
    <div className="w-full h-24 flex flex-row justify-between items-center">
      <img src="./logoTitre.png" alt="logo" className="w-36" />
      <div className="flex flex-row">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row">
              <ul className="flex flex-row text-2xl">
                <li className="text-bestWhite hover:text-bestGreen px-5"><Link to="/">Home</Link></li>
                <li className="text-bestWhite hover:text-bestGreen px-5"><Link to="/shop">Shop</Link></li>
                <li className="text-bestWhite hover:text-bestGreen px-5"><Link to="/AboutUs">About Us</Link></li>
                <li className="text-bestWhite hover:text-bestGreen px-5"><Link to="/Gallery">Gallery</Link></li>
                <li className="text-bestWhite hover:text-bestGreen px-5"><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>
            <div style={{ marginTop: isSearchActive ? '8px' : '-20px' }}>
              <input
                className="w-full border-b border-bestGreen bg-transparent focus:outline-none text-bestWhite"
                type="text"
                disabled={!isSearchActive}
                style={{ marginBottom: isSearchActive ? '0px' : '-8px' }}
              />
            </div>
          </div>
          <button onClick={handleSearchClick}><img src="./loupe.png" className="w-8 justify-end" alt="search" /></button>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          <p className="text-gray-200 text-xl pb-[-2]">0</p>
          <Link to="/Cart"><img className="w-8" src="./panier.png" alt="panier" /></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
