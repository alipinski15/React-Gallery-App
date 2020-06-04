import React, { Component } from 'react';
import './index.css';
import  apiKey  from './config';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

//Importing other Components
import Search from './Components/Search';
import Navigation from './Components/Navigation';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';


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
    this.compSearch();
  }
  
  //This function fetches data from the API, then updates the state of the App.

  performSearch = (query = 'nature') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          images: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  // The next three functions get images with a specific topic name. These are used for the Nav button on the page. 
  
  catSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo,
          loading: false
        });
      })
    }

  dogSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogs: response.data.photos.photo,
          loading: false
        });
      })
    }

  compSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          computers: response.data.photos.photo,
          loading: false
        });
      })
    }

  loadingReset = () => {
    this.setState({ loading: true})
  }
  
  render () {
    return (
      <div className="container">
        <Search onSearch={ this.performSearch } resetLoading={this.loadingReset }/>
        <Navigation />
        {
          (this.state.loading)
          ? <h3>Loading...</h3>
          :
          <Switch>
            <Route exact path ="/" render={() => <PhotoContainer data={this.state.images} loading={this.state.loading} topic="Nature" />} />
            <Route path="/search/:search" render={({match}) => <PhotoContainer data={this.state.images} loading={this.state.loading} topic={match.params.search} />} />
            <Route path="/cats" render={() => <PhotoContainer data={this.state.cats} loading={this.state.loading} topic="Cats" />} />
            <Route path="/dogs" render={() => <PhotoContainer data={this.state.dogs} loading={this.state.loading} topic="Dogs" />} />
            <Route path="/computers" render={() => <PhotoContainer data={this.state.computers} loading={this.state.loading} topic="Computers" />} />
            <Route component={NotFound} />
          </Switch>
        }
      </div>
    );
  }
}



