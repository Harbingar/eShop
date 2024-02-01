import React from 'react';

const Product: React.FC = () => {

  return (
    <>
        <div className="flex flex-row justify-between w-4/5 my-4">
            <div>
                <h1 className="text-5xl text-bestWhite underline decoration-bestGreen decoration-[2px]">Product Review</h1>
            </div>
            <div className="flex flex-row w-1/2 py-5">
                <input placeholder="Comment here" className="pl-3 w-full border-b border-bestGreen bg-transparent focus:outline-none text-bestWhite" type="text" />
                <button className="mx-5 bg-bestGreen px-2 rounded-sm text-bestBlack">Send</button>
            </div>
        </div>
    </>
  );
}

export default Product;
