
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="title">About Us</h1>
            <p className="description">
                Our club is dedicated to fostering creativity and collaboration. Join us to explore new horizons.
            </p>
        </motion.div>
    );
}

export default About;
