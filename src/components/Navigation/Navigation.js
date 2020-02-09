import React from 'react';
import * as SC from './navigation.style';

const Navigation = () => {
  return (
  <SC.Navigation>
    <nav className="navigation">
        <ul className="nav">
            <li><a className="nav-aboutme" href="#aboutme">About</a> </li>
            <li><a className="nav-projects" href="#projects">Projects</a></li>
            <li><a className="nav-stack" href="#stack">Stack</a></li>
            <li><a className="nav-contact" href="#contact">Contact</a></li>
        </ul> 
    </nav>
  </SC.Navigation>
  );
};

export default Navigation;