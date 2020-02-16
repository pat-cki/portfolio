import styled from 'styled-components';


const Contact = styled.section`
  margin-bottom: 3em;

  ul.list {
    display: flex;
    flex-direction: column;
  }
  ul.list li {
      margin-top: 1.2em;
      font-size: 1.2em;
      padding: 0;
  }
  ul.list li a {
      text-decoration: none;
  }
  .list:hover li:not(:hover) {
      opacity: 0.2;
  }
  .list:hover li:hover {
      color: var(--headline-color);
      font-weight: 700;
  }
  .contact-paragraph {
    margin-top: 1em;
    line-height: 2em;
  }
`
export { Contact };