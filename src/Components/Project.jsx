import React, { useState } from "react";
import { motion } from "motion/react"

const Project = ({ project, isDarkMode }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [project.image1, project.image2, project.image3];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`flex flex-col min-h-screen pt-36 `} >
      <div className="flex-grow text-center">
        <motion.h1 
          initial={{y: -30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.3}}
          className={`text-4xl font-Ovo mb-10 mt-5 ${isDarkMode ? 'text-white' : ''}`}>
            {project.title}
        </motion.h1>

        <motion.div 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.3}}
          className="relative w-1/2 mx-auto mb-10">
            {/* Carousel Images */}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <img
                      src={`/react-portfolio/${image}`}
                      alt={`Project Image ${index + 1}`}
                      className="w-full h-[350px] "
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              initial={{x: -30, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.8}}
              onClick={prevImage}
              className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#10094;
            </motion.button>
            <motion.button
              initial={{x: 30, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.8}}
              onClick={nextImage}
              className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#10095;
            </motion.button>
        </motion.div>

        <div className="container mx-auto my-4">
          <motion.p 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.5}}
            className={`w-1/2 text-center mx-auto font-Ovo ${isDarkMode ? 'text-white' : ''}`}>
            {project.description}
          </motion.p>

          <motion.h3
            initial={{x: 30, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
            className={`text-2xl pt-20 mb-2 font-Ovo ${isDarkMode ? 'text-white' : ''}`}>
            Tools Used:
          </motion.h3>
          <motion.ul 
            initial={{x: 30, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className="list-none">
            {project.tools.map((tool) => (
              <li className={`font-Ovo ${isDarkMode ? 'text-white' : ''}`} key={tool}>{tool}</li>
            ))}
          </motion.ul>
        </div>

        
      </div>
    </div>
  );
};

export default Project;
