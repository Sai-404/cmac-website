import React from 'react';
import { motion } from 'framer-motion';
import galleryImage1 from '../../assets/Gallery/galleryImage1.jpg';
import galleryImage2 from '../../assets/Gallery/galleryImage2.jpg';
import galleryImage3 from '../../assets/Gallery/galleryImage3.jpg';
import galleryImage4 from '../../assets/Gallery/galleryImage5.jpg';
import galleryImage5 from '../../assets/Gallery/galleryImage4.jpg';

const Gallery = () => {
  const images = [
    { src: galleryImage2, alt: 'Winners of the event', caption: 'Winners' },
    { src: galleryImage3, alt: 'Teams discussing strategies', caption: 'Teams Discussing' },
    { src: galleryImage5, alt: 'Runners celebrating', caption: 'Runners' },
    { src: galleryImage4, alt: 'Organisation team group photo', caption: 'Organisation Team' },
    { src: galleryImage1, alt: 'Judges panel evaluating', caption: 'Judges Panel' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.03,
      rotate: 1,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen w-full bg-[#FFF7ED] relative overflow-hidden flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ fontFamily: 'Aeonik, sans-serif', color: '#111827' }}
        >
          CMAC Gallery
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, imgIndex) => (
            <motion.div
              key={imgIndex}
              className="relative overflow-hidden rounded-lg bg-white border border-gray-200 group"
              custom={imgIndex}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover="hover"
              role="figure"
              aria-label={image.caption}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-x-0 bottom-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                variants={captionVariants}
                initial="hidden"
                animate={false}
                whileHover="visible"
              >
                <p
                  className="text-white text-sm sm:text-base font-medium p-3 text-center"
                  style={{ fontFamily: 'Aeonik, sans-serif' }}
                >
                  {image.caption}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;