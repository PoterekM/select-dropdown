import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StyledDropdown from './StyledDropdown.js';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  text-align: right;
  margin-right: 30px;
  background-color: white;
`;

class App extends Component {
  render() {
    return (
      
        <div className="App">
        <Container>
          <header className="App-header">
          <p>Hello!</p>
            <StyledDropdown />
          </header>
        </Container>
        </div>
 

    );
  }
}

export default App;
