import { motion } from "framer-motion";
import React from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import '../index.css';
import Footer from "./Footer.jsx";
import WhatsApp from "./WhatsApp.jsx";
import Numbers from "./Numbers.jsx";
import Features from "./Features.jsx";
import Testimonials from "./Testimonials.jsx";
import S1 from "./S1.jsx";
import S2 from "./S2.jsx";
import Blogs from "./Blogs.jsx";
import Trusted from "./Trusted.jsx";
const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <Header/>
        <Hero/>
        <Trusted/>
        {/* <Numbers/> */}
        <Features/>
        {/* <S1/> */}
        <S2/>
        <Testimonials/>
        {/* <Blogs/> */}
        <div className="my-8">
          <WhatsApp/>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;