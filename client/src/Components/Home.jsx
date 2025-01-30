import { motion } from "framer-motion";
import React from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import '../index.css';

const Home = () => {
  return (
   <div className="w-screen min-h-screen bg-gray-100">
    <Header/>
    <Hero/>
   </div>
  );
};

export default Home;