import React from 'react';
import './header.css';

const Header = () => {
  return(
    <React.Fragment>
      <header className="aboutme">
        <h1>Pat Cichocki</h1>
        <h2>Full stack developer, designer, lifelong learner, cat lover, <a
            href="https://www.foundersandcoders.com/" target="_blank">Founders & Coders</a> graduate. </h2>
        </header>
        <section className="intro main">
        <p className="intro-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolor. Corporis in, aspernatur dolor
        facilis beatae ea numquam cupiditate vero ducimus harum quas? Quam consequatur illum fugit, nesciunt eos
        voluptatem.
        </p>
        <p className="intro-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolor. Corporis in, aspernatur dolor
        facilis beatae ea numquam cupiditate vero ducimus harum quas? Quam consequatur illum fugit, nesciunt eos
        voluptatem.
        </p>
        </section>
    </React.Fragment>
  );
};

export default Header;

