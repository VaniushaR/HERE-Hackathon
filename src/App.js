import React, { Component } from 'react';
import './App.css';
//import Footer1 from './Components/Footer';
import Login from './Components/Login';
import logo from './Assets/Logo.svg';

class App extends Component {
  render() {
    return (
      <div className="Log">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </div>
    );
  }
}

export default App;
