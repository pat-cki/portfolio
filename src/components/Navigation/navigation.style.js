import styled from 'styled-components';
const Nav = styled.section`

  ul.nav {
    display: flex;
  }

  ul.nav li {
    display: inline-block;
    padding: 0 2.5rem 0 0;
    transition: var(--transition);
    font-size: 1em;
  }

  .nav:hover li:not(:hover) {
    opacity: 0.2;
  }

  .nav:hover li:hover {
    color: var(--headline-color);
    font-weight: 700;
  }

  ul.nav li a {
    color: var(--headline-color);
    text-decoration: none;
  }
`

export default Nav;