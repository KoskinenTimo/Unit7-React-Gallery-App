import './css/index.css';
import './config/config';
import axios from 'axios';
import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

// API key
import apiKey from './config/config';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  searchImgs = () => {

  }

  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />  
          <Switch>
            <Route exact path="/" component={ PhotoContainer }/>            
          </Switch> 
          
        </div>
      </BrowserRouter>
    );
  }
}