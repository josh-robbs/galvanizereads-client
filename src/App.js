import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AuthorButton from './components/AuthorButton'
import BookButton from './components/BookButton'
import BookList from "./components/BookList"
import AuthorList from './components/AuthorList'
import Error from './components/Error'


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />
          <BookButton />
          <AuthorButton />
          <Switch>
              <Route path='/' exact />
              <Route path='/books' component={BookList} exact />
              <Route path='/authors' component={AuthorList} exact />
              <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;