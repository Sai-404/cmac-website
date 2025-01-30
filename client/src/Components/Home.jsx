import { motion } from "framer-motion";
import React from "react";
import Header from "./Header.Jsx";
import Hero from "./Hero.Jsx";
import '../index.css';


const Home = () => {
    return (
        <div>
          <Header />
          <Hero />
        </div>
    );
}

export default Home;