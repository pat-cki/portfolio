import styled from 'styled-components';


const Contact = styled.section`

  .header_container {
    display: flex;
  }
  ul.links {
    display: flex;
    flex-direction: column;
  }
  ul.links li {
      margin-top: 1.2em;
      font-size: 1.2em;
      padding: 0;
  }
  ul.links li a {
      text-decoration: none;
  }
  .links:hover li:not(:hover) {
      opacity: 0.2;
  }
  .links:hover li:hover {
      color: var(--headline-color);
      font-weight: 700;
  }
  .contact-paragraph {
    margin-top: 1em;
    line-height: 2em;
  }
`
export { Contact };