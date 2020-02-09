import React from 'react';
import * as SC from './header.style';


const Header = () => {
  return(
    <SC.Header>
      <header className="aboutme">
        <h1>Pat Cichocki</h1>
        <h2>Full stack developer, designer, lifelong learner, cat lover, <a
            href="https://www.foundersandcoders.com/" target="_blank">Founders & Coders</a> graduate. </h2>
        </header>
        <section className="intro main">
        <p className="intro-paragraph">I am a full stack JS developer with background in UX/UI design (almost ten years of experience). For the last 4 months I honed my development skills at Founders and Coders, a highly selective coding bootcamp in London. I am now looking for new challenges, where I could contribute my knowledge and experience, and at the same time enhance my coding skills. 

        </p>
        <p className="intro-paragraph">
        I am passionate about integrating technologies to solve problems, optimising existing solutions and building engaging products with lasting value. I enjoy exploring new ideas, learning new technologies and always strive for improvement. 

        </p>
        </section>
    </SC.Header>
  );
};

export default Header;

