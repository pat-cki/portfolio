import React from 'react';
import * as SC from './projects.style';
import projects_icon from '../../svgs/icons/fac.svg';
import Projects_icon from '../icons_components/Contact_icon';
import Projects_list from './Projects_section';


const Projects = () => {
    return(
        <SC.Projects>
            <section id="projects" className="projects main">
                <div className="section-header ">
                    <Projects_icon icon={projects_icon}/>
                    <h3> Some of my projects:</h3>
                </div>
                <div className = "projects-list">
                    <Projects_list />
                </div>
            </section>
        </SC.Projects>
    );
};

export default Projects;

