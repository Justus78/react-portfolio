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
        {/* 
        <section className="py-5 text-center container">
          <div className="row py-lg-5"> 
            <div className="col-lg-6 col-md-8 mx-auto"> 
              <h1 className="fw-light">My Projects</h1>
              <p className="lead text-muted">
                Below is a collection of my projects. Most were completed using ASP .NET MVC or as desktop applications.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {projectsData.map((project) => (

              <div key={project.id} className="col">
                <div className="card shadow-sm">
                  {
                  project.image1 ?
                    <img src={`/react-portfolio${project.image2}`} className="card-img-top" width="100%" height="225" alt={project.title} />
                  :
                    <p>no image found</p>
                  }
                  <div className="card-body">
                    <h4 className="card-title cardTitle">{project.title}</h4>
                    <p className="card-text">{project.description}</p>
                    <p className="card-text">Tools used in this project:</p>
                    <ul className="card-text">

                      {project.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}

                    </ul>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to={`/ProjectDetails/${project.id}`} className="btn btn-primary">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      
    </div>
  )
}

export default Home