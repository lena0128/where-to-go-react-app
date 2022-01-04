import './App.css';
import React, { Component } from 'react';
import Homepage from './components/Homepage';
import CitiesContainer from './containers/CitiesContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Homepage />
          <Navbar />
        <CitiesContainer />
        </Router>
      </div>
    );
  }
}

export default App;
