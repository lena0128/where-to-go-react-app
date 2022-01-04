import React from 'react';
import CityCard from './CityCard';

function CityList(props) {
    const cities = props.cities.map((city, idx) => <CityCard 
    key={idx}
    id={city.id} 
    name={city.name}
    country={city.country} 
    image={city.image}
    />)
        return (

            <div className="city-list">
                <div>{ props.foundCity ? <CityCard 
                id={props.foundCity.id}
                name={props.foundCity.name}
                country={props.foundCity.country}
                image={props.foundCity.image}
                goBack={props.foundCity.goBack}

                /> : cities }</div>
                
            </div>
        )
}

export default CityList