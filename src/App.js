import axios from 'axios';
import React, {Component,Fragment} from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch  
} from 'react-router-dom';

// Components
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import Error from './components/Error';

// API key
import apiKey from './config/config';

export default class App extends Component {

  // Photo array for the fetched data
  // Query string to store current search
  // Loading boolean controls loading... while data is fetched
  constructor() {
    super();
    this.state = {
      photos: [],
      query: '',
      loading: true
    }
  }

  /**
   * Sets loading to true while fetching data
   */
  setLoading = () => {
    this.setState({
      loading: true
    });
  }

  /**
   * Uses inout to fetch data from flickr. Set Loading to false when fetching is complete.
   * @param {String} input 
   */
  searchImgs = (input = "apples") => {
    if (this.state.query !== input) {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&format=json&privacy_filter=1&nojsoncallback=1`)
        .then( response => {          
          this.setState({
            photos: response.data.photos.photo,
            query: input,
            loading: false
          })              
        })
        .catch(error => {
          console.log('Error fetching data!', error);
        })      
    }
  }

  /**
   * Loads search window first or from '/' route.
   * Route /search/:query is used to track what search is currently done, "query" is given as value to Photocontainer to fetch data.
   */
  render () {
    return (
      <BrowserRouter>        
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search" />} />
            <Route exact path="/search" render={routeProps => 
              <SearchForm 
                {...routeProps} />} />
            <Route exact path="/search/:query" render={routeProps => 
              <Fragment>
                <SearchForm 
                  {...routeProps} />
                <PhotoContainer
                  match={routeProps.match}
                  searchImgs={this.searchImgs}
                  setLoading={this.setLoading}
                  photos={this.state.photos}
                  loading={this.state.loading}
                  storedQuery={this.state.query} />
              </Fragment>} />
            <Route component={Error}/>
          </Switch>     
        </div>
      </BrowserRouter>
    );
  }
}