import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import  apiKey  from './config';

//Importing other Components
import Search from './Components/Search';
import Navigation from './Components/Navigation';
import ImageList from './Components/ImageList';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      cats: [],
      dogs: [],
      computers: []
    };
  } 

  componentDidMount() {
    this.performSearch();
    this.catSearch();
    this.dogSearch();
    this.computerSearch();
  }
  
  //This function fetches data from the API, then updates the state of the App.

  performSearch = (query = 'flowers') => {
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
  
  //The next three functions fetches data for the three Nav links.

  catSearch = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          cats: responseData.photos.photo,
          loading: false
        });
      })
    }

  dogSearch = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          dogs: responseData.photos.photo,
          loading: false
        });
      })
    }

  computerSearch = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computer&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          computers: responseData.photos.photo,
          loading: false
        });
      })
    }
  
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={ this.performSearch } />
          <Navigation />
          <Switch>
            <Route path="/" render={() => <ImageList  data={ this.state.images } />} />
            <Route exact path="/cats" render={() => <Navigation data={ this.state.cats } />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



