import './font.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./pages/cart";
import Product from "./pages/product";
import Account from "./component/account";
import Wishlist from './pages/wishlist';
import Home from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
