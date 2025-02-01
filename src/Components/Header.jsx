import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='h-[70px] flex items-center justify-start  bg-gray-300 gap-20 px-20'>
    <Link to="/">Home</Link>
    <Link to="/education">Education</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/cert"> Certifications</Link>
    </div>
  )
}

export default Header