import React from 'react';

// If no results are found when fetching data with a completed fetch, this component is rendered in 'PhotoContainer'
const NotFound = () => (
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </li>

);

export default NotFound;