import React from 'react';
import Nav from "../component/navBar";
import Footer from "../component/footer";
import Wishlist from "../component/wishList";

const WishlistPage: React.FC = () => {
  return (
    <>
    <Nav/>
    <Wishlist/>
    <Footer/>
    </>
  );
}

export default WishlistPage;
