
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="h-[70px] flex items-center justify-start gap-10 px-20 bg-gradient-to-r from-blue-600 to-purple-500 shadow-lg">
      <Link 
        to="/" 
        className="text-white text-lg font-semibold "
      >
        Home
      </Link>
      <Link 
        to="/education" 
        className="text-white text-lg font-semibold "
      >
        Education
      </Link>
      <Link 
        to="/skills" 
        className="text-white text-lg font-semibold "
      >
        Skills
      </Link>
      <Link 
        to="/cert" 
        className="text-white text-lg font-semibold "
      >
        Certifications
      </Link>
    </div>
  );
}

export default Header;
