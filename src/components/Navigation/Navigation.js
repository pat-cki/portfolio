import React from 'react';
import * as SC from './navigation.style';

const Navigation = () => {
  return (
  <SC.Navigation>
    <nav className="navigation">
        <ul className="nav">
            <li><a className="nav-aboutme" href="#">About</a> </li>
            <li><a className="nav-projects" href="#">Projects</a></li>
            <li><a className="nav-technologies" href="#">Technologies</a></li>
            <li><a className="nav-contact" href="#">Contact</a></li>
        </ul> 
    </nav>
  </SC.Navigation>
  );
};

export default Navigation;