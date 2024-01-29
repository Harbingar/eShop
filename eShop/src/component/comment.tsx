import React from 'react';

const Product: React.FC = () => {

  return (
    <>
    <div className="flex flex-row w-3/4 items-center my-3">
        <img className="rounded-full w-16 h-16" src="./instagram-img-01.jpg" alt="" />
        <div className="flex flex-col px-5 justify-around">
            <p className="text-bestWhite">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ad quis ducimus unde tempora suscipit soluta ullam, ex asperiores ut architecto neque deserunt provident nesciunt pariatur saepe, accusamus velit praesentium!</p>
            <p className="text-bestGreen">Nom</p>
        </div>
    </div>
    </>
  );
}

export default Product;
