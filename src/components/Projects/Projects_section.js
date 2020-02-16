import React from 'react';
import projects from "../../utils/projects.js";

const Projects_section = () => {
  return projects.map(project => {
    return (
      <div className="project">
          <h4 className="project-title">{project.name}</h4>
          <p className="project-description">{project.description}</p>
          <p className="stack">stack used: {project.stack}</p>
          <section className="project-links">
              <ul className="links-list">
                  <li className="project-link"><a href={project.repo_url} target="_blank">Github Repo</a></li>
                  <li className="project-link"><a href={project.live_url} target="_blank">Live Version</a></li>
              </ul>
          </section>
      </div>
    )
  })
}


export default Projects_section;