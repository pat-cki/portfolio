import React from 'react';
import * as SC from './projects.style';
import contact from "../../svgs/icons/contact.svg";


const Projects = (contact) => {
  return(
    <SC.Projects>
      <section id="projects" className="projects main">
        <h3 className="section_header"> Some of my projects:</h3>
        <div className="row">
          
          <div className="project">
              <h4 className="project-title">Currency Converter</h4>
              <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto sunt iusto, dolorem, eos sit fugiat eum debitis eius  quidem commodi asperiores consequuntur rerum facere aut consectetur neque ullam.</p>
              <section className="project-links">
                  <ul className="links-list">
                      <li className="project-link"><a href="">Github Repo</a></li>
                      <li className="project-link"><a href="">Live Version</a></li>
                  </ul>
              </section>
          </div>

          <div className="project">
              <h4 className="project-title">Currency Converter</h4>
              <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto sunt iusto, dolorem, eos sit fugiat eum debitis eius  quidem commodi asperiores consequuntur rerum facere aut consectetur neque ullam.</p>
              <section className="project-links">
                  <ul className="links-list">
                      <li className="project-link"><a href="">Github Repo</a></li>
                      <li className="project-link"><a href="">Live Version</a></li>
                  </ul>
              </section>
          </div>

        </div>

        <div className="row">
          
          <div className="project">
              <h4 className="project-title">Currency Converter</h4>
              <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto sunt iusto, dolorem, eos sit fugiat eum debitis eius  quidem commodi asperiores consequuntur rerum facere aut consectetur neque ullam.</p>
              <section className="project-links">
                  <ul className="links-list">
                      <li className="project-link"><a href="">Github Repo</a></li>
                      <li className="project-link"><a href="">Live Version</a></li>
                  </ul>
              </section>
          </div>

          <div className="project">
              <h4 className="project-title">Currency Converter</h4>
              <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto sunt iusto, dolorem, eos sit fugiat eum debitis eius  quidem commodi asperiores consequuntur rerum facere aut consectetur neque ullam.</p>
              <section className="project-links">
                  <ul className="links-list">
                      <li className="project-link"><a href="">Github Repo</a></li>
                      <li className="project-link"><a href="">Live Version</a></li>
                  </ul>
              </section>
          </div>

        
        </div>


  </section>
    </SC.Projects>
  );
};

export default Projects;

