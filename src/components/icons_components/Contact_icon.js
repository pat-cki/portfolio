import React from 'react';
import * as SC from './contact_icon.style';



const Contact_icon = props => (
  <SC.Contact_icon>
    <img src={props.icon} alt="" />
  </SC.Contact_icon>
);

export default Contact_icon;