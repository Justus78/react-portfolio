import React from 'react'
import { assets, infoList, toolsData } from '../assets/assets'
import { motion } from "motion/react"


const About = ({ isDarkMode }) => {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='about'
        className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'text-white' : ''}`}>

        <motion.h4 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}}
            className='text-center mb-2 text-lg font-Ovo'>
            Introduction
        </motion.h4>

        <motion.h2
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}} 
            className='text-center text-5xl font-Ovo'>
            About Me
        </motion.h2>

        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8,}}
            className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

            <motion.div 
                initial={{scale: 0.9, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{duration: 0.6}}
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <img src={assets.user_image} alt='user image' className='w-full rounded-3xl' />
            </motion.div>

            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}}
                className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'
                >
                I am an aspiring software developer with a strong passion for building web applications and APIs. 
                While I may not have formal industry experience yet, I have independently developed and deployed multiple projects, 
                including a .NET Web API and two fully functional websites. My expertise includes frontend development with React 
                and backend development using C# and .NET. I am always eager to learn new technologies, solve complex problems, 
                and refine my skills through hands-on experience. I am actively seeking opportunities to contribute to real-world 
                projects and grow as a professional developer.
                </p>

                <motion.ul 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.8, delay: 1}}
                    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (

                        <motion.li
                            whileHover={{scale: 1.05}}
                            key={index} className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                            lightHover darkShadow hover:-translate-y-1 duration-500 ${isDarkMode ? 'bg-white' : ''}`}>
                            <img src={icon} alt={title}  className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4 
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.3}}
                    className={`my-6 text-gray-700 font-Ovo ${isDarkMode ? 'text-white' : ''}`}>Tools I Use
                </motion.h4>
                <motion.ul 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 1.5}}
                    className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index) => (

                        <motion.li                         
                        whileHover={{scale: 1.05}}                        
                        key={index}
                        className={`flex items-center justify-center w-12 sm:w-14 aspect-square border lightHover darkShadow
                         border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${isDarkMode ? 'bg-white' : ''}`}>
                            <img src={tool} alt='Tool' className='w-5 sm:w-7' />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About