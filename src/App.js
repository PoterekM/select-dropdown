import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>Hello!</p>
        <Dropdown/>
        </header>
      </div>


    );
  }
}

export default App;
