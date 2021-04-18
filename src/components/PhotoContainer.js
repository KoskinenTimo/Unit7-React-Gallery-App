import React from 'react';

// Components
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = (props) => {
  let query = props.match.params.query;
  props.searchImgs(query);
  if (!props.photos.length) {
    return (
      <div className="photo-container">
        <h2>Results for {query}</h2>
          <ul>
            <NotFound />
          </ul>
      </div>
    );

  } else {    
    let photoComponents = props.photos.map((photo) => {
      return (
        <Photo {...photo} key={photo.id}/>
      );
    });
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


export default PhotoContainer;
