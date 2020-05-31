import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

/*This function uses data passed to a prop, the 'map' function iterates over the data passed by the prop and creates a unique URL
  as a prop from the 'Image' component. Then those images are displayed on the page. 
*/

const ImageList = (props) => {
  const results = props.data;
  let images;
  if(results.length > 0) {
    images = results.map(image => <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>)
  } else {
    images = <NotFound />
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