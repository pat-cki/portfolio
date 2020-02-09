import styled from 'styled-components';

const Footer = styled.section`
  footer {
    margin-top: 6em;
    background-color: var(--footer-background);
    display: flex;
    justify-content: center;
    opacity: 0.5;
    transition: var(--transition);
  }
  
  footer:hover {
      opacity: 1;
  }
  
  footer p {
      margin: 2em;
      color: var(--headline-color);
      font-weight: 700;
  }
`
export { Footer };