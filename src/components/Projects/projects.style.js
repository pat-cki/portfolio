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