import React from 'react';
import { Link } from "react-router-dom"



const AuthorButton = (props) => {
  return (
    <Link to='/authors'>
      <div id='authorButton'>
        <h2>Authors</h2>
      </div>  
    </Link>
  )
}

export default AuthorButton;