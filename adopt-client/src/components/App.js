import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import PetApp from '../containers/PetApp';
import PageNotFound from './errors/PageNotFound';
import './App.css';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/pets/page/:page" component={PetApp} />
          <Route exact path="/pets" render={() => <Redirect to="/pets/page/1" />} />
          <Route exact path="/" render={() => <Redirect to="/pets" />} />
          <Route path="/pets" component={PetApp} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;