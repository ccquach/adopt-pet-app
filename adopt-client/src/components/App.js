import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import PetApp from '../containers/PetApp';
import PageNotFound from './errors/PageNotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/pets/page/:page" component={PetApp} />
          <Route exact path="/pets" render={() => <Redirect to="/pets/page/1" />} />
          <Route exact path="/" render={() => <Redirect to="/pets" />} />
          <Route path="/pets" component={PetApp} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;