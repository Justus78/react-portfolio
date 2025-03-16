import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Matt_profile from '../../assets/Matt-Images/matt_profile.jpg'
import resume from '../../assets/Matt-Justus-Resume.pdf'
import react_logo from '../../assets/react.svg'
import { useEffect, useState, useRef } from 'react'
import { assets } from '../../assets/assets'

const Navbar = ( {isDarkMode, setIsDarkMode} ) => {

    console.log(isDarkMode);
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
      sideMenuRef.current.style.transform = 'translate(-16rem)'
  }
  const closeMenu = () => {
      sideMenuRef.current.style.transform = 'translate(16rem)'
  }

  useEffect(() => {
      window.addEventListener('scroll', ()=> {
          if (window.scrollY > 50) {
              setIsScrolled(true)
          } else {
              setIsScrolled(false)
          }
      })
  },[]);

  return (
    <>
        <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] `}>
            <img src={isDarkMode ? '' : assets.header_bg_color } alt='' className='w-full' />
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
        flex items-center justify-between z-50 ${isScrolled ? "bg-opacity-50 backdrop-blur-3xl shadow-sm" : ""}`}
        >
            <a href="/#top">
                <img src={assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 
            lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? "border-none" : "shadow-sm bg-opacity-50"} ${isDarkMode ?' border border-white' : ''}
            `}
            >
                <li><Link className={`font-ovo ${isDarkMode ? 'text-white' : 'text-black'}`} to="/#top">Home</Link></li>
                <li><Link className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} to="/#about">About me</Link></li>
                {/* <li><Link className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} to="/#services">Services</Link></li> */}
                <li><Link className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} to="/#work">My Work</Link></li>
                <li><Link className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} to="/#contact">Contact Me</Link></li>
            </ul>           

            <div className='flex items-center gap-4'>
                <button onClick={() => setIsDarkMode(prev => !prev)}>
                    <img src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt=''  className='w-6'/>
                </button>

                <a href="/#contact" className={`font-Ovo hidden lg:flex items-center gap-3 px-10
                py-2.5 border border-gray-500 rounded-full ml-4 text-black ${isDarkMode ? 'bg-white': ''}`}
                >
                    Contact 
                    <img src={assets.arrow_icon} className='w-3' alt=''/>
                </a>

                <button className='block md:hidden mx-2' onClick={openMenu}>
                <img src={assets.menu_black} alt=''  className='w-6'/>

                </button>
            </div>

            {/*  mobile menu  */}

            <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
            top-0 bottom-0 w-64 h-screen  transition duration-500 ${isDarkMode ? 'bg-black' : 'bg-rose-50'}`}>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <img src={assets.close_black} alt=''className='w-5 cursor-pointer'/>
                </div>

                <li><Link className={`font-Ovo ${isDarkMode ? 'text-white' : 'text-black'}`} to="/#top" onClick={closeMenu}>Home</Link></li>
                <li><Link className={`font-Ovo ${isDarkMode ? 'text-white' : 'text-black'}`} to="/#about" onClick={closeMenu}>About me</Link></li>
                {/* <li><Link className='font-Ovo' to="/#services" onClick={closeMenu}>Services</Link></li> */}
                <li><Link className={`font-Ovo ${isDarkMode ? 'text-white' : 'text-black'}`} to="/#work" onClick={closeMenu}>My Work</Link></li>
                <li><Link className={`font-Ovo ${isDarkMode ? 'text-white' : 'text-black'}`} to="/#contact" onClick={closeMenu}>Contact Me</Link></li>
            </ul>
        </nav>
    </>
  )


}

export default Navbar