import './font.css';
import Nav from "./component/navBar";
import Footer from "./component/footer";
import Welcome from "./component/welcome";
import Hr from "./component/hr";
import Offers from "./component/offers";
import TopBest from "./component/topBest";
import BlogSection from "./component/blogSection";
import ShopSearch from "./component/shopSearch";
import ProductCart from "./component/productCart";

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
    <ShopSearch/>
    <ProductCart/>
    <Footer/>
    </>
  )
}

export default App
