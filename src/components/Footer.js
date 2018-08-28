import React from 'react';
import { Link } from "react-router-dom"



const BookButton = (props) => {
  return (

      <div className='footer'>
        <small>TacoCorp &copy 2018</small>
        <Link to='/'>Home</Link>

      </div>  
  )
}

export default BookButton;