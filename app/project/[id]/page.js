'use client'
import '../../globals.css'
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import projectDetails from '../../../assets/project-details.json'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const page = ({ }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('darkTheme');
            localStorage.theme = 'darkTheme';
        } else {
            document.body.classList.remove('darkTheme');
            localStorage.theme = '';
        }
    }, [isDarkMode])

    const { id } = useParams();
    const project = projectDetails.find((project) => project.id === id);
    console.log(isDarkMode)

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

export default page