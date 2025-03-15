import React from 'react'
import { Link } from 'react-router-dom'
import react_logo from '../../assets/react.svg'

const Footer = () => {
  return (
    <>
        <footer className="text-muted py-5">
            <div className="container">
            <p className="float-end mb-1">
                <a href="#">Back to top</a>
            </p>        
            <p className="mb-0">See the code for my work on <Link to="https://github.com/Justus78" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i><strong>GitHub</strong></Link>.</p>
            <p className="mb-1">Web page author and designer &copy; Matthew Justus</p>
            <p className="mb-1">This Web Site powered by React <img src={react_logo} alt="" /> </p>
            </div>
        </footer>
    </>

  )
}

export default Footer