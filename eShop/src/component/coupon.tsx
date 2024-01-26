import React from 'react';

const coupon: React.FC = () => {
  return (
    <div className='w-1/2 border-bestGreen border-2 flex flex-col rounded-xl'>
        <div className="flex justify-center">
            <img className="w-1/2 items-center" src="./coupon.png" alt="coupon" />
        </div>
        
        <div className="flex flex-row justify-around mb-3">
            <input className="w-2/3 h-8 pl-2 rounded" type="text" placeholder="Enter your coupon code here"/>
            <button className="bg-bestGreen text-bestBlack rounded w-1/5">Apply</button>
        </div>
    </div>


  );
}

export default coupon;