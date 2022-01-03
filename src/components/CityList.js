import React, { Component } from 'react';
import CityCard from './CityCard';
import { connect } from 'react-redux';

class CityList extends Component {

    render(){
        const cities = this.props.cities.map((city, idx) => <CityCard 
        key={idx} 
        name={city.name}
        country={city.country} 
        image={city.image}
        />)
        
        return(
            <div className="city-list">
                {cities}
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