import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import PetList from '../containers/PetList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/pets" component={PetList} />
        <Route exact path="/" render={() => <Redirect to="/pets" />} />
      </div>
    );
  }
}

export default App;