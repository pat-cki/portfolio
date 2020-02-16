import React from 'react';
import * as SC from './stack.style';
import stack_icon from '../../svgs/icons/stack.svg';
import Stack_icon from '../icons_components/Stack_icon';

const Stack = () => {
  return (
    <SC.Stack>
      <section id="stack" className="stack main">
        <div className= "stack_header">
          <Stack_icon icon={stack_icon} />
          <h3>Stack</h3>
        </div>
        <p className="contact-paragraph">Technologies I use:</p>
        <ul className="stack-list">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
      </section>
    </SC.Stack>
  );
};


export default Stack; 

