import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
        <ul className="nav">
            <li><a className="nav-aboutme" href="#">About</a> </li>
            <li><a className="nav-projects" href="#">Projects</a></li>
            <li><a className="nav-contact" href="#">Contact</a></li>
        </ul> 
    </nav>
  );
};

export default Navigation;