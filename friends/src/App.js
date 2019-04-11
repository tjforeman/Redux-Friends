import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import {Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path='/' component={Login} />
      <PrivateRoute path="/friends" component={() => <FriendsList  />}
          />
      </div>
    );
  }
}

export default App;
