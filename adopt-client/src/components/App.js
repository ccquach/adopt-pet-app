import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import PetList from '../containers/PetList';
import NewPetForm from '../containers/NewPetForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/pets" component={PetList} />
        <Route exact path="/" render={() => <Redirect to="/pets" />} />
        <Route exact path="/pets/new" component={NewPetForm} />
      </div>
    );
  }
}

export default App;