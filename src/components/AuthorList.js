import React, { Component } from 'react';

class AuthorList extends Component {
  state = {
    authors: []
  }

  componentDidMount() {
    this.fetchAuthors()
  }

  fetchAuthors = () => {
    fetch('https://galvanizereads-robbs.herokuapp.com/authors')
      .then(response => response.json())
      .then(response => this.setState({authors: response.author})
    )
  }

  render(){
    return (
      <header className="App-header">
        <h1 className='App-header-title'>Author List</h1>       
      </header>
    )
  }
}

export default AuthorList;
