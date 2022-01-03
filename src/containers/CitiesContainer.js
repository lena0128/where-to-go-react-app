import React, { Component } from 'react';
import CityFilter from '../components/CityFilter';
import CityList from '../components/CityList';
import CityForm from '../components/CityForm';
import { connect } from 'react-redux';
import { fetchCities } from '../actions/cityActions';
import Loading from '../components/Loading';

class CitiesContainer extends Component {

    state = {
        search: ""
    }

    handleInputChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }  

    componentDidMount(){
        this.props.fetchCities();
    }


    render(){
        const foundCity = this.props.cities.find((city) => city.name.toLowerCase() === this.state.search.toLowerCase())
        return(
            <div id="cities-container">
            <CityForm />
            <CityFilter search={this.state.search} handleInputChange={this.handleInputChange} />
            { this.props.loading ? <Loading /> : <CityList foundCity={foundCity} searchTerm={this.state.search} /> }
            </div>
        )
    }

}

const mapStateToProps = (stateFromStore) => {
    return { 
      cities: stateFromStore.cities,
      loading: stateFromStore.loading,
      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCities: (citiesData) => dispatch(fetchCities(citiesData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer)