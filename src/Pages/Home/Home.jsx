import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Home.css';
import { Link } from 'react-router-dom';
import projectsData from '../../assets/project-details.json'


const Home = () => {

  return (
    <div>
      <Navbar />

        {/* Hero section with text and description */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5"> {/*} Large padding for vertical spacing */}
            <div className="col-lg-6 col-md-8 mx-auto"> {/*} Centered column of text, responsive size (6/12 for large, 8/12 for medium) */}
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
                    <img src={`${process.env.PUBLIC_URL}${project.image2}`} className="card-img-top" width="100%" height="225" alt={project.title} />
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
                        {/* Link using the project's id */}
                        <Link to={`/ProjectDetails/${project.id}`} className="btn btn-primary">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home