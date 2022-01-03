import React, { Component } from 'react';
import CityCard from './CityCard';
import { connect } from 'react-redux';

class CityList extends Component {

    render(){
        const cities = this.props.cities.map((city, idx) => <CityCard 
        key={idx} 
        name={city.name}
        country={city.country} 
        />)
        
        return(
            <div className="row-list">
                {cities}
            </div>
        )
    }

}

const mapStateToProps = (stateFromStore) => {
    return {
        cities: stateFromStore.cities
    }
}

export default connect(mapStateToProps)(CityList)