import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import matt_profile from '../../assets/Matt-Images/matt_profile.jpg'
import joke_photo from '../../assets/Matt-Images/HiringJoke.jpg'
import "./About.css"
import resume from '../../assets/Matt-Justus-Resume.pdf'


const About = () => {
  return (
    <>
    <Navbar />
      <div className="container">
        <div className="row">
             {/* First div: Left column */}
            <div className="col-md-6 text-center mb-4">
                <h1>Matt Justus</h1>
                <img src={matt_profile} alt="Matt Justus picture" className="profile-pic img-fluid rounded d-block mx-auto" /*style="max-width: 300px; height: auto;"*//>
            </div>
            
            {/*  Second div: Right column */}
            <div className="col-md-6 text-center">
                <h1 className="display-4">Welcome to my website!</h1>
                <img src={joke_photo} alt="Hiring Joke Image" className="img-fluid d-block mx-auto mt-3"  />
                <p className="lead mt-4">
                    Welcome to my website! I'm a software engineer with a passion for creating websites and web applications.
                    I studied computer programming at Walter State Community College and have an Associate's Degree in Information
                    Systems - Computer Programming. I have experience working with a team to create a website for a client using Agile methodologies. 
                    I have experience using HTML, CSS, JavaScript, SQL, SQL Server Management Studio, Git, and GitHub. 
                    I am excited to continue learning and growing as a software engineer.
                </p>
                <p>
                  View my resume <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.
                </p>
              </div>
        </div>
    </div> 
    <Footer />   
    </>
  )
}

export default About