import React from 'react'
import { assets } from '../../assets/assets'

const Footer = ( {isDarkMode} ) => {
  return (
    <div className={`mt-20 ${isDarkMode ? 'text-white' : ''}`}>
        <div className='text-center'>
            <img src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
                <img src={assets.mail_icon} alt='' className='w-6' />
                Stars787878@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&#169; 2025 Justus Matthew. All Rights Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/Justus78" target='_blank'>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/matt-justus-947967239/" target='_blank'>LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer