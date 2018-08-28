import React, { Component } from 'react';
import Header from './Header'
import AuthorButton from './AuthorButton'
import BookButton from './BookButton'



class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BookButton />
        <AuthorButton />
      </div>
    );
  }
}

export default Home;