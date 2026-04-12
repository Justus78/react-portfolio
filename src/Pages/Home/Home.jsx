import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Home.css';
import About from '../../Components/About';
import Contact from '../../Components/Contact';
import Header from '../../Components/Header'
import Work from '../../Components/Work'
import { HashLink as Link } from 'react-router-hash-link';


const Home = ( {isDarkMode, setIsDarkMode} ) => {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      {/*<Services isDarkMode={isDarkMode} />*/}
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer />      
    </div>
  )
}

export default Home