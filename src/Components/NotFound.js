import React from 'react';

//This function creates elements that are displayed on the page when a search returns no results.

const NotFound = (props) => (
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
</li>
)

export default NotFound;