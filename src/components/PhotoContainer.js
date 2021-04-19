import React, { Component } from 'react';

// Components
import NotFound from './NotFound';
import Photo from './Photo';

// This component is rendered only when there is a search done. This happens when route is '/search/:query'.
class PhotoContainer extends Component {

  /**
   * Uses '/search/:query' to track what needs to be fetched with searchImgs(). Fetched data to be be rendered when component mounts.
   */
  componentDidMount() {
    let query = this.props.match.params.query;
    this.props.searchImgs(query);
  }

  /**
   * When component updates, uses '/search/:query' to fetch data. Loading state is changed to make "Loading..." 
   * message appear while fetching is happening.
   */
  componentDidUpdate() {
    if(this.props.match.params.query !== this.props.storedQuery 
       && this.props.loading === false) {
      this.props.setLoading();
    }
    let query = this.props.match.params.query;
    this.props.searchImgs(query);
  }
  
  /**
   * Renders first Loading... message while data is fetched. If there are results, renders a list of Photo components.
   * If there are no results, NotFound component is loaded.
   */
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
