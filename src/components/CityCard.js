import React from 'react'; 
import { Link } from 'react-router-dom';

function CityCard(props) {
    return(
        <div className="city-card">
           <img src={props.image} alt={props.name} />
           <h3>{props.name}, {props.country}</h3>
           <Link to={`/cities/${props.id}`}>Read More</Link>
        </div>
    )
}

export default CityCard;