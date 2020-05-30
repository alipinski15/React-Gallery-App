import React, { Component } from 'react';
import './index.css';
import  apiKey  from './config';
import Search from './Components/Search';
import Navigation from './Components/Navigation';
import ImageList from './Components/ImageList';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'cats') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          images: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  
  
  render () {
    return (
        <div className="container">
          <Search />
          <Navigation />
          <ImageList  data={ this.state.images }/>
        </div>
    );
  }
}



