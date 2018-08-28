import React from 'react';
import { Link } from "react-router-dom"



const BookButton = (props) => {
  return (
    <Link to='/books'>
      <div id="bookButton">
        <h2>Books</h2>
      </div>  
    </Link>
  )
}

export default BookButton;