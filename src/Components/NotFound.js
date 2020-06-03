import React from 'react';

//This function creates elements that are displayed on the page when the url does not match and returns an Error.

const NotFound = () => (
  <li className="not-found">
    <img src="/404.png" alt=""/>
    <h2>Error 404</h2>
    <h3>The URL does not match existing route!</h3>
</li>
)


export default NotFound;