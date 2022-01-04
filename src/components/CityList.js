import React, { Component } from 'react';
import CityCard from './CityCard';
import { connect } from 'react-redux';
import cityReducer from '../reducers/cityReducer';

class CityList extends Component {

    render(){
        const cities = this.props.cities.map((city, idx) => <CityCard 
        key={idx}
        id={city.id} 
        name={city.name}
        country={city.country} 
        image={city.image}
        />)
        
        return(
            <div className="city-list">
                <div id="found-city">{ this.props.foundCity ? <CityCard 
                id={this.props.foundCity.id}
                name={this.props.foundCity.name}
                country={this.props.foundCity.country}
                image={this.props.foundCity.image}

                /> : cities }</div>
                
            </div>
        )
    }

}

// this function allows us to get the state from the store and map it to our props
const mapStateToProps = (stateFromStore) => {
    return {
        cities: stateFromStore.cities
    }
}

export default connect(mapStateToProps)(CityList)