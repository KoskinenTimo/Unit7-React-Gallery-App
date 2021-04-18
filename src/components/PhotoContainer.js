import React, { Component } from 'react';

// Components
import NotFound from './NotFound';
import Photo from './Photo';

class PhotoContainer extends Component {
  componentDidMount() {
    let query = this.props.match.params.query;
    this.props.searchImgs(query);
  }

  componentDidUpdate() {
    if(this.props.match.params.query !== this.props.storedQuery 
       && this.props.loading === false) {
      this.props.setLoading();
    }
    let query = this.props.match.params.query;
    this.props.searchImgs(query);
  }
  
  render() {
    if(this.props.loading) {    
      return (
        <div className="photo-container">
          <h2>Loading...</h2>     
        </div>
      );
    } else {
      if (!this.props.photos.length) {
        let query = this.props.match.params.query;
        return (
          <div className="photo-container">
            <h2>Results for {query}</h2>
              <ul>
                <NotFound />
              </ul>
          </div>
        );

      } else {    
        let photoComponents = this.props.photos.map((photo) => {
          return (
            <Photo {...photo} key={photo.id}/>
          );
        });
        let query = this.props.match.params.query;
        return (
          <div className="photo-container">
            <h2>Results for {query}</h2>
              <ul>
                {photoComponents}
              </ul>
          </div>
        );
      }
    } 
  }
}


export default PhotoContainer;
