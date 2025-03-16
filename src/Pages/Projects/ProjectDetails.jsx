import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Project from '../../components/Project'
import projectDetails from '../../assets/project-details.json'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../Context'

export async function generateStaticParams() {
    // Define all possible project IDs here
    const projects = ["softballStats", "netflixClone", "geminiClone", "greenevilleWalks"]; // Replace with actual project IDs

    return projects.map((id) => ({
        id,
    }));
}

const Page = ({  }) => {

    const {isDarkMode, setIsDarkMode} = useContext(Context);

    const { id } = useParams();
    const project = projectDetails.find((project) => project.id === id);

    return (
        <>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            {project ?
                <Project key={project.id} project={project} isDarkMode={isDarkMode} />
                :
                <div>Project not found</div>
            }

            <Footer isDarkMode={isDarkMode} />
        </>
    )
}

export default Page