import React from 'react';

const summary: React.FC = () => {
  return (
    <div className='flex flex-col text-bestWhite'>
        <h1 className="text-3xl">Order Summary</h1>
        <div className="flex flex-col my-3">
            <div className="flex flex-row justify-between">
                <p className="my-1">Sub Total</p>
                <p className="my-1">130$</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="my-1">Discount</p>
                <p className="my-1">40$</p>
            </div>
        </div>
        <div className="w-full h-0.5 bg-bestGreen rounded"></div>
        <div>
            <div className="flex flex-col my-3">
                <div className="flex flex-row justify-between">
                    <p className="my-1">Coupon Code</p>
                    <p className="my-1">10$</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="my-1">Tax</p>
                    <p className="my-1">2$</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="my-1">Shipping Cost</p>
                    <p className="my-1">Free</p>
                </div>
            </div>
        </div>
        <div className="w-full h-0.5 bg-bestGreen rounded"></div>
        <div className="flex justify-end items-center text-5xl my-3">
            <h1 className="text-bestGreen px-10">TOTAL</h1>
            <h1 className="text-bestWhite bg-bestGreen rounded px-1">388$</h1>
        </div>
        <div className="flex justify-end">
            <button className="w-1/4">
                <img  src="./checkout.png" alt="Checkout" />
            </button>
        </div>
    </div>
  );
}

export default summary;