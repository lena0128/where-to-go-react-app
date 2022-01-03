import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homepage from './components/Homepage';
import CityForm from './components/CityForm';
import CityList from './components/CityList';
import { fetchCities } from './actions/cityActions';
import Loading from './components/Loading';

class App extends Component {

  componentDidMount(){
      this.props.fetchCities();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Where to Trvel App!</h1>
        <Homepage />
        <CityForm />
        { this.props.loading ? <Loading /> : <CityList /> }
      </div>
    );
  }
}

const mapStateToProps = (stateFromStore) => {
     return {
       loading: stateFromStore.loading
     }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: (cityData) => dispatch(fetchCities(cityData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
