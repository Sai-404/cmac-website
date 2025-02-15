import { motion } from "framer-motion";
import React from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import '../index.css';
import Footer from "./Components/Footer.jsx";
import WhatsApp from "./Components/WhatsApp.jsx";
import Numbers from "./Components/Numbers.jsx";
import Features from "./Components/Features.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import S1 from "./Components/S1.jsx";
import S2 from "./Components/S2.jsx";
import Blogs from "./Components/Blogs.jsx";
import '../App.css';
import Trusted from "./Components/Trusted.jsx";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-red overflow-x-hidden">
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