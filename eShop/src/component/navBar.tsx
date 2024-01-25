import React, { useState } from 'react';

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
                <li className="text-bestWhite hover:text-bestGreen px-5"><a href="#">Home</a></li>
                <li className="text-bestWhite hover:text-bestGreen px-5"><a href="#">Shop</a></li>
                <li className="text-bestWhite hover:text-bestGreen px-5"><a href="#">About Us</a></li>
                <li className="text-bestWhite hover:text-bestGreen px-5"><a href="#">Gallery</a></li>
                <li className="text-bestWhite hover:text-bestGreen px-5"><a href="#">Contact</a></li>
              </ul>
            </div>
            <div style={{ marginTop: isSearchActive ? '8px' : '-20px' }}> {/* Contrôle de la marge supérieure avec une valeur personnalisée */}
              <input
                className="w-full border-b border-bestGreen bg-transparent focus:outline-none text-bestWhite"
                type="text"
                disabled={!isSearchActive}
                style={{ marginBottom: isSearchActive ? '0px' : '-8px' }} // Contrôle de la marge inférieure avec une valeur négative
              />
            </div>
          </div>
          <button onClick={handleSearchClick}><img src="./loupe.png" className="w-8 justify-end" alt="search" /></button>
        </div>

        <div className="flex flex-col justify-center items-center mx-5">
          <p className="text-gray-200 text-xl pb-[-2]">0</p>
          <img className="w-8" src="./panier.png" alt="panier" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
