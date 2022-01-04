import './App.css';
import React, { Component } from 'react';
import Homepage from './components/Homepage';
import CitiesContainer from './containers/CitiesContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import GuidesContainer from './containers/GuidesContainer';


class App extends Component {

    state = {
      loggedIn: true, 
    }

  render() {
    return (
      <Router>
      <div className="App">
          
          {/* I will set up the user authentication system later */}
          {this.state.loggedIn ? <Navbar /> : false }

            <Switch>

              <Route path="/cities" component={CitiesContainer}/>
          
              <Route path='/guides' component={GuidesContainer} />

            </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
