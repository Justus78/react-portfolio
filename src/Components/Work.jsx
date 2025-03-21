import { assets, workData } from '../assets/assets'
import React from 'react'
import { motion } from "motion/react"
import projectDetails from "../assets/project-details.json"
import { Link } from 'react-router-dom'

export const Work = ( {isDarkMode} ) => {

  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1}}
        id='work' className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? '' : ''}`}>

        <motion.h4
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.3, duration: 0.5}}
            className='text-center mb-2 text-lg font-Ovo'
        >
            My Portfolio
        </motion.h4>

        <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-center text-5xl font-Ovo'
        >
            My Latest Work
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >
            Welcome to my software development portfolio. Explore a collection of projects showcasing my expertise in software development.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 my-10 gap-5'>
            {projectDetails.map((project) => (
                
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    key={project.id}
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
                     group border border-gray-300'
                    style={{
                        backgroundImage: `url("/react-portfolio/${project.image1}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                        }}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                    py-1 px-1 flex items-center justify-between duration-500 group-hover:bottom-7 '>
                        
                        <Link 
                        className='flex items-center justify-between w-full px-3 py-2 hover:text-black'
                        to={`/project/${project.id}`}>
                            
                                <p className='hover:text-black text-2xl'>{project.title}</p>
                                {/* <p className='text-sm text-gray-700'>{project.description}</p> */}
                            
                            <div
                                className='border rounded-full border-black w-9
                                aspect-square flex items-center justify-center shadow-[2px_2px_2px_#000]
                                group-hover:bg-lime-300 transition'>
                                <img src={assets.send_icon} alt='' className='w-5' />
                            </div>
                        </Link>                       
                        
                    </div>
                </motion.div>
            ))}
        </motion.div>
        {/*
        <motion.a 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.1, duration: 0.5}}
            href="" className={ `w-max flex items-center justify-center gap-2
             text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
            lightHover duration-500 ${isDarkMode ? 'text-black bg-white' : ''}`}>
            Show More <Image src={assets.right_arrow_bold} alt='Right Arrow' className='w-4' />
        </motion.a>
        */}
    </motion.div>
  )
}

export default Work;