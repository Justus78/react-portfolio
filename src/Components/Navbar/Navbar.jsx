import React from 'react'
import { Link } from 'react-router-dom'
import Matt_profile from '../../assets/Matt-Images/matt_profile.jpg'
import resume from '../../assets/Matt-Justus-Resume.pdf'
import react_logo from '../../assets/react.svg'


const Navbar = () => {
  return (
    <>
    <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
           <div className="row">{/* <!-- Bootstrap row to hold columns for layout --> */}
            <div className="col-sm-4 offset-md-1 py-4"> {/* <!-- Single column with padding and offset by 1 column --> */}
              <h4 className="text-white">Social Media</h4>
              {/* <!-- List of social media links --> */}
              <ul className="list-unstyled">
                <li><Link to="https://www.linkedin.com/in/matt-justus-947967239/" className="text-white" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Follow on LinkedIn</Link></li>
                <li><Link to="https://github.com/Justus78" className="text-white" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Follow on GitHub</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
      {/* <!-- Navbar with dark background --> */}
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          {/* <!-- Branding/logo section --> */}
          <Link href="#" className="navbar-brand d-flex align-items-center">
            
            <img src={Matt_profile} alt="Profile Picture" height="30px" width="30px" className="img-fluid rounded-circle mb-3" />
    
            <strong className="ms-2">Matt Justus</strong>
          </Link>
          
          <div className="me-auto">
            <Link to="/"><button className="btn btn-light me-2">Home</button></Link>
            <Link to="/About"><button className="btn btn-light me-2">About Me</button></Link>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-light me-2">My Resume</button>
            </a>

          </div>

          <div className='text-white me-auto'><h3>Powered by React <img src={react_logo} alt="" /></h3></div>
    
          <div className="d-flex align-items-center">
            <h5 className="text-white"><strong>Social Media Links </strong></h5>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
    
        </div>
      </div> 
    </>
       )
}

export default Navbar