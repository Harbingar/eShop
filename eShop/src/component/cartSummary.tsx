import React from 'react';
import Coupon from "./coupon";
import Cart from "./productCart";
import Summary from "./orderSummary";

const coupon: React.FC = () => {
  return (
    <>
    <Cart/>
    <div className="flex flex-row items-start justify-center mt-5">
        <div className="p-5 flex justify-center">
            <Coupon/>
        </div>
        <div className="p-5 flex justify-center">
            <Summary/>
        </div>
        
    </div>
    </>

    
  );
}

export default coupon;