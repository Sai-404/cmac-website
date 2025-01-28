
import { motion } from "framer-motion";

function Gallery() {
    const images = [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
    ];

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="title">Gallery</h1>
            <div className="gallery-grid">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Gallery item ${index + 1}`}
                        whileHover={{ scale: 1.1 }}
                        className="gallery-img"
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default Gallery;
