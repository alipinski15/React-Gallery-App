import React from 'react';

//This function creates the 'img' element for the page. 

const Photo = (props) => {
  const imageData = props.data.map(image => 
    <li key={image.id} >
      <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt=""/>
    </li>
  );
  return (imageData);
};

export default Photo;

// `https://farm${farmId}.staticflickr.com/${server}/${id}_${secret}.jpg`;
