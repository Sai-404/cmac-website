import { motion } from "framer-motion";
import React from "react";

const Home = () =>{
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="title">Welcome to Our Club</h1>
            <p className="description">Explore our activities, events, and projects!</p>
        </motion.div>
    );
}

export default Home;
