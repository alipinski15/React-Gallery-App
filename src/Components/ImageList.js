import React from 'react';
import Image from './Image';


const ImageList = (props) => {
  const results = props.data;
  let images;
  if(results.length > 0) {
    images = results.map(image => <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>)
  }

  return(
    <div className="photo-container">
      <h2>Results</h2>
        <ul>
          {images}
        </ul> 
    </div>
  );
}

export default ImageList;