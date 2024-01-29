import React from 'react';
import Coupon from "./coupon";
import Cart from "./productCart";
import Summary from "./orderSummary";

const coupon: React.FC = () => {
  return (
    <>
    <Cart/>
    <div className="flex flex-col items-center">
        
        <div className="w-3/4 flex flex-row items-start mt-10">
            <div className="p-5 flex">
                <Coupon/>
            </div>
            <div className="p-5 flex">
                <Summary/>
            </div>
            
        </div>
    </div>
    
    </>

    
  );
}

export default coupon;