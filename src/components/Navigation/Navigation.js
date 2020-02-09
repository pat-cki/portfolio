import React from 'react';
import Nav from './navigation.style';

const Navigation = () => {
  return (
    <Nav>
    <nav className="navigation">
        <ul className="nav">
            <li><a className="nav-aboutme" href="#">About</a> </li>
            <li><a className="nav-projects" href="#">Projects</a></li>
            <li><a className="nav-contact" href="#">Contact</a></li>
        </ul> 
    </nav>
    </Nav>
  );
};

export default Navigation;