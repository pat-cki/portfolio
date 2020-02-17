import React from 'react';
import * as SC from './stack.style';
import stack_icon from '../../svgs/icons/stack.svg';
import Stack_icon from '../icons_components/Stack_icon';
import { ReactComponent as Html } from "../../svgs/stack/1-html5.svg";
import { ReactComponent as Css } from "../../svgs/stack/2-css3.svg";
import { ReactComponent as JS } from "../../svgs/stack/3-javascript.svg";
import { ReactComponent as Sass } from "../../svgs/stack/2-1-sass.svg";
import { ReactComponent as Bootstrap } from "../../svgs/stack/4-bootstrap.svg";
import { ReactComponent as JQuery } from "../../svgs/stack/5-jquery.svg";
import { ReactComponent as React1} from "../../svgs/stack/6-react.svg";
import { ReactComponent as Nodejs } from "../../svgs/stack/7-nodejs.svg";
import { ReactComponent as Express } from "../../svgs/stack/8-express.svg";
import { ReactComponent as Handlebars } from "../../svgs/stack/10-handlebars.svg";
import { ReactComponent as Github } from "../../svgs/stack/9-github.svg";
import { ReactComponent as Heroku } from "../../svgs/stack/11-heroku.svg";
import { ReactComponent as Mongodb} from "../../svgs/stack/12-mongodb.svg";
import { ReactComponent as Postgresql } from "../../svgs/stack/13-postgresql.svg";
import { ReactComponent as Npm } from "../../svgs/stack/14-npm.svg";
import { ReactComponent as Travis } from "../../svgs/stack/15-travis.svg";
import { ReactComponent as Illustrator } from "../../svgs/stack/16-illustrator.svg";
import { ReactComponent as PS } from "../../svgs/stack/17-ps.svg";
import { ReactComponent as Sketch } from "../../svgs/stack/18-sketch.svg";
import { ReactComponent as Netlify } from "../../svgs/stack/19-netlify.svg";





const Stack = () => {
  return (
    <SC.Stack>
      <section id="stack" className="stack main">
        <div className= "section-header">
          <Stack_icon icon={stack_icon} />
          <h3>Stack:</h3>
        </div>
        <p className="contact-paragraph">Technologies I use:</p>
        <ul className="stack_list">
            <li className="stack_element"><Html/></li>
            <li className="stack_element"><Css/></li>
            <li className="stack_element"><JS/></li>
            <li className="stack_element"><Sass/></li>
            <li className="stack_element"><Bootstrap/></li>
            <li className="stack_element"><JQuery/></li>
            <li className="stack_element"><React1/></li>
            <li className="stack_element"><Nodejs/></li>
            <li className="stack_element"><Express/></li>
            <li className="stack_element"><Handlebars/></li>
            <li className="stack_element"><Github/></li>
            <li className="stack_element"><Heroku/></li>
            <li className="stack_element"><Mongodb/></li>
            <li className="stack_element"><Postgresql/></li>
            <li className="stack_element"><Npm/></li>
            <li className="stack_element"><Travis/></li>
            <li className="stack_element"><Netlify/></li>
            <li className="stack_element"><Illustrator/></li>
            <li className="stack_element"><PS/></li>
            <li className="stack_element"><Sketch/></li>
        </ul>
      </section>
    </SC.Stack>
  );
};


export default Stack; 

