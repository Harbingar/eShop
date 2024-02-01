import './font.css';
import Nav from "./component/navBar";
import Footer from "./component/footer";
import Welcome from "./component/welcome";
import Hr from "./component/hr";
import Offers from "./component/offers";
import TopBest from "./component/topBest";
import BlogSection from "./component/blogSection";
import CartSummary from "./component/cartSummary";
import Shop from "./component/shop";
import Product from "./component/product";
import Account from "./component/account";
import Wishlist from "./component/wishList";
import ContactForm from "./component/contactForm"


function App() {

  return (
    <>
    <Nav/>
    <Welcome/>
    <Hr/>
    <Offers/>
    <Hr/>
    <TopBest />
    <Hr/>
    <BlogSection/>
    <Hr/>
    <CartSummary/>
    <Shop/>
    <Product/>
    <Account/>
    <Wishlist/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
