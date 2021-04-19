import React from 'react';

// A component to create list items for 'PhotoContainer' when rendering pictures.
const Photo = ({id, secret, server}) => {
const photosrc = `https://live.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
return (
  <li>
    <img src={photosrc} alt="" />
  </li>
);
}

export default Photo;