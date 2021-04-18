import './css/index.css';
import './config/config';
import axios from 'axios';
import React, {Component} from 'react';
import {
  BrowserRouter,
  Redirect,
  Route
} from 'react-router-dom';

// Components
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';

// API key
import apiKey from './config/config';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      firstLoad: true,
      query: ''
    }
  }

  searchImgs = (input = "apples") => {
    if (this.state.query !== input) {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&format=json&privacy_filter=1&nojsoncallback=1`)
      .then( response => {
        this.setState({
          photos: response.data.photos.photo,
          query: input
        })      
      })
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className="container">
            <Route exact path="/" render={() => <Redirect to="/search" />} />
            <Route path="/search" render={routeProps => 
              <SearchForm 
                {...routeProps} />} />
            <Route path="/search/:query" render={routeProps =>
              <PhotoContainer
                match={routeProps.match} 
                searchImgs={this.searchImgs}
                photos={this.state.photos}
                firstLoad={this.state.firstLoad} />} />

     
        </div>
      </BrowserRouter>
    );
  }
}