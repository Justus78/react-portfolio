import { assets, serviceData } from '../assets/assets'
import React from 'react'
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='services'
        className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'text-white' : ''}`}>

        <motion.h4 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.3, duration: 0.5}}
            className='text-center mb-2 text-lg font-Ovo'>
            What I Offer
        </motion.h4>

        <motion.h2 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.5, duration: 0.5}}
            className='text-center text-5xl font-Ovo'>
            My Services
        </motion.h2>

        <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.7, duration: 0.5}} 
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >
            I am an aspiring software developer with a strong passion for building web applications and APIs. 
            While I may not have formal industry experience yet, I have independently developed and deployed multiple projects, 
            including a .NET Web API and two fully functional websites. My expertise includes frontend development with React 
            and backend development using C# and .NET. I am always eager to learn new technologies, solve complex problems, 
            and refine my skills through hands-on experience. I am actively seeking opportunities to contribute to real-world 
            projects and grow as a professional developer.
        </motion.p>

        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.9, duration: 0.6}}
            className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 grid-cols-1'>
            {serviceData.map(({icon, title, description, link}, index) => (

                <motion.div
                    whileHover={{scale: 1.05}}
                    key={index} 
                    className={`border border-gray-400 rounded-lg px-8 py-12 darkShadow 
                    cursor-pointer lightHover hover:-translate-y-1 duration-500 ${isDarkMode ? 'bg-white' : ''}`}>
                        <img src={icon} alt='' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm leading-5 text-gray-600'>{description}</p>
                        <a href={link} className='flex items-center gap-2 mt-5 text-sm'>
                            Read more <img src={assets.right_arrow} className='w-4' alt='' />
                        </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services