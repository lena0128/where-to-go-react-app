import './App.css';
import React, { Component } from 'react';
import Homepage from './components/Homepage';
import CitiesContainer from './containers/CitiesContainer';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Welcome to Where to Trvel App!</h1>
        <Homepage />
        <CitiesContainer />
      </div>
    );
  }
}

export default App;
