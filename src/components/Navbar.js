import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <ul id="nav-bar">
            <Link to="/cities" className="nav-link">
              <li id="cities">Cities</li>
            </Link> 

            <Link to="/cities/new" className="nav-link">
              <li id="new-city">Add a City</li>
            </Link>

            <Link to="/home" className="nav-link">
                <li id="home-page">Home</li>
            </Link>   
        </ul>
    )

}

export default Navbar