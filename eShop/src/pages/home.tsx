import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "../component/navBar";
import Footer from "../component/footer";
import Welcome from "../component/welcome";
import Hr from "../component/hr";
import Offers from "../component/offers";
import TopBest from "../component/topBest";
import BlogSection from "../component/blogSection";

const Home: React.FC = () => {
  return (
    <>
    <Nav/>
    <Welcome/>
    <Hr/>
    <Offers/>
    <Hr/>
    <TopBest/>
    <Hr/>
    <BlogSection/>
    <Footer/>
    </>
  );
}

export default Home;
