import styled from 'styled-components';

const Projects = styled.section`
  margin-bottom: 5em;



  .projects {
    display: flex;
    flex-direction: column;
  }

  .row {
      display: flex;
      flex-direction: column;
  }

  .project {
      border: 1px solid var(--headline-color);
      padding: 2em 1.3em 3em 1.3em;
      margin-top: 1em;
      transition: var(--transition);
      background-color: white;
  }

  .project:hover {
      box-shadow: 10px 10px 0 0 var(--shadow-color);
  }

  h4.project-title {
      font-size: 1.4em;
  }

  .project-description {
      margin-top: 1em;
      line-height: 2em;
      font-size: .9em;
  }

  .project-links {
      margin-top: 1.2em;
  }

  .stack {
      margin-top: 0.75em;
      font-size: 0.9em;
      font-weight: 700;
  }

  .projects-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  @media only screen and (min-width: 768px) {
    

    .projects-list {
        grid-template-columns: 1fr 1fr;
    }
}



`
export { Projects };