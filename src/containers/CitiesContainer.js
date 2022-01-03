import React, { Component } from 'react';
import CityFilter from '../components/CityFilter';
import CityList from '../components/CityList';
import CityForm from '../components/CityForm';
import { connect } from 'react-redux';
import { fetchCities } from '../actions/cityActions';

class CitiesContainer extends Component {

    componentDidMount(){
        this.props.fetchCities();
    }


    render(){
        return(
            <div id="cities-container">
            <CityForm />
            <CityFilter />
            <CityList />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      cities: state.cities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCities: (citiesData) => dispatch(fetchCities(citiesData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer)