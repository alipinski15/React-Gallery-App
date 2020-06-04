import React, { Component } from 'react';
import Photo from './Photo';
import NoResults from './NoResults';



/*This function uses data passed to a prop, the 'map' function iterates over the data passed by the prop and creates a unique URL
  as a prop from the 'Image' component. Then those images are returned and displayed with the Topic and images. 
*/
class PhotoContainer extends Component {
  
  render() {
    if(this.props.loading){
      return <h2>Loading...</h2>
    } else if (this.props.data.length ) {
      return(
        <div className="photo-container">
          <h2>{this.props.topic}</h2>
            <ul>
              <Photo data={this.props.data}/>
            </ul> 
        </div>
      );
    } else {
      return(
        <div className="photo-container">
          <h2>Results</h2>
            <ul>
              <NoResults />
            </ul> 
        </div>
      );
    }
  }
}

export default PhotoContainer;

