import React from 'react';

const Photo = ({id, secret, server}) => {

const photosrc = `https://live.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
return (
  <li>
    <img src={photosrc} alt="" />
  </li>
);
}

export default Photo;