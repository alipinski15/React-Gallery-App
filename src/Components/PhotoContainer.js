import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';


/*This function uses data passed to a prop, the 'map' function iterates over the data passed by the prop and creates a unique URL
  as a prop from the 'Image' component. Then those images are returned and displayed with the Topic and images. 
*/
const PhotoContainer = (props) => {
   const imageData = props.data;
   const topic = props.topic;
   let images;

    if(imageData.length > 0){
      images = imageData.map(image => {
        const farmId = image.farm;
        const server = image.server;
        const id = image.id;
        const secret = image.secret;
        const url = `https://farm${farmId}.staticflickr.com/${server}/${id}_${secret}.jpg`;

        return <Photo url={url} key={id}/>
      })
    } else {
      images = <NoResults />
    }
    
    return(
      <div className="photo-container">
        <h2>{topic}</h2>
          <ul>
            { images }
          </ul> 
      </div>
    );
}

export default PhotoContainer;

