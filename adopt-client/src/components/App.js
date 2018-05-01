import React, { Component } from 'react';
import PetList from '../containers/PetList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PetList />
      </div>
    );
  }
}

export default App;