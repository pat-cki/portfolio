import React from 'react';
import * as SC from './contact.style';
import contact_icon from '../../svgs/icons/contact.svg';
import Contact_icon from '../icons_components/Contact_icon';
import phone_icon from '../../svgs/icons/phone.svg';
import Phone from '../icons_components/Phone_icon';
import mail_icon from '../../svgs/icons/mail.svg';
import Mail from '../icons_components/Mail_icon';



const Contact = () => {
  return (
    <SC.Contact>
      <section id="contact" className="contact main">

        <div className="section-header">
          <Contact_icon icon={contact_icon} />
          <h3>Contact:</h3>
        </div>
        <p className="contact-paragraph">If you have any question or comment, please feel free to drop  me a line or give me a call:</p>
        <div className="flex-container">
        <div className="first_column">
          <ul className="list">
              <li><a target="_blank" href="https://github.com/pat-cki">Github</a></li>
              <li><a target="_blank" href="https://twitter.com/velvet_violence">Twitter</a></ li>
              </ul>
              </div>
              <div className="second_column">
              <ul className="list">
              <li className="flex-container"> <Phone icon={phone_icon}/> 07538 784 846</li>
              <li className="flex-container"><Mail icon={mail_icon}/><a href="mailto:pat.cichocki@gmail.com">Mail</a></li>
          </ul>
        </div>

        </div>
      </section>
    </SC.Contact>
  );
};


export default Contact; 

