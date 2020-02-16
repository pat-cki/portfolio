import styled from 'styled-components';

const Projects = styled.section`
  margin-bottom: 5em;

  /* .projects-header {
      display: flex;
      position: relative;
      z-index: 1;
  }

  .projects-header::before {
  background-color: #fc0;
  clip-path: polygon(100% 0px, 0% 100%, 100% 100%);
  width: 60px;
  height: 60px;
  left: -35px;
  content: '';
  position: absolute;
  top: -13px;
  z-index: -1;
} */

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


  @media only screen and (min-width: 768px) {
    

    .row {
        flex-direction: row;
    }

    .row .project {
        min-width: 50%;
    }

    .row :first-child {
        margin-right: 1em;
    }

    .project {
        padding: 3em;
    }
}



`
export { Projects };