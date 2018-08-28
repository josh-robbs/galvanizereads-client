import React, { Component } from 'react';
import logo from '../images/greadslogo2.png'

class Header extends Component {
  render(){
    return (
      <header className="header">
        <img src={logo} alt="Galvanize Reads Logo"/>
        <h1>Galvanize Reads</h1>
      </header>
    )
  }
}

export default Header;
