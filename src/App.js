import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import BookList from "./components/BookList"
import AuthorList from "./components/AuthorList"
import Error from "./components/Error"


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/books' component={BookList} exact />
              <Route path='/authors' component={AuthorList} exact />
              <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;