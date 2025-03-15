import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../assets/project-details.json';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get project ID from URL
  const project = projectsData.find(p => p.id === projectId);

  if (!project) return <p>Project not found</p>;

  return (
    <>
    <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-fill text-center bg-light">
          <h1>{project.title}</h1>

          
          <div className="container my-4">
            <p className='w-50 text-center mx-auto'>{project.description}</p>
            <h3>Tools Used:</h3>
            <ul className='list-unstyled'>
              {project.tools.map(tool => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="d-inline-block bg-light">
            <img src={`/react-portfolio${project.image1}`} alt="" className='img-fluid mb-3 me-3' height="500px" width="700px"/>
            <img src={`/react-portfolio${project.image2}`} alt="" className='img-fluid mb-3 me-3' height="500px" width="700px"/>
            <img src={`/react-portfolio${project.image3}`} alt="" className='img-fluid mb-3 me-3' height="500px" width="700px"/>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default ProjectDetails;
