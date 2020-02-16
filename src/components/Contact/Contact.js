import React from 'react';
import * as SC from './contact.style';
import contact_icon from '../../svgs/icons/contact.svg';
import Contact_icon from '../icons_components/Contact_icon';


const Contact = () => {
  return (
    <SC.Contact>
      <section id="contact" className="contact main">
        <div className="section-header">
          <Contact_icon icon={contact_icon} />
          <h3>Contact</h3>
        </div>
        <p className="contact-paragraph">If you have any question or comment, please fell free to drop me a line or give me a call</p>
        <ul className="links">
            <li><a target="_blank" href="https://github.com/pat-cki">Github</a></li>
            <li><a target="_blank" href="https://twitter.com/velvet_violence">Twitter</a></ li>
            <li><a href="mailto:pat.cichocki@gmail.com">Mail</a></li>
        </ul>
      </section>
    </SC.Contact>
  );
};


export default Contact; 

