import React from 'react';
import Nav from "../component/navBar";
import Footer from "../component/footer";
import Cart from "../component/cartSummary";
import Featured from "../component/featured";
import Hr from "../component/hr";

const CartPage: React.FC = () => {
  return (
    <>
    <Nav/>
    <Cart/>
    <Hr/>
    <Featured/>
    <Footer/>
    </>
  );
}

export default CartPage;
