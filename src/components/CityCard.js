import React, { Component } from 'react';

const CityCard = (props) => {
    const {name} = props.city
    return(
        <div id="city">
           <h3>{name}</h3>    
        </div>
    )

}

export default CityCard