import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import Friend from './components/Friend'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path='/' component={Login} />
      <Route path='/friends' component ={Friend} />
      </div>
    );
  }
}

export default App;
