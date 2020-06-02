import React from 'react';

//This function creates the 'img' element for the page. 

const Image = (props) => (
  <li>
    <img src={props.url} alt=""/>
  </li>
);

export default Image;

