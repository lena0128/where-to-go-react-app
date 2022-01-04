import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div id="nav-bar">
            <Link to="/cities">
              <button id="cities">Cities</button>
            </Link> 

            <Link to="/cities/new">
              <button id="new-city">Add a City</button>
            </Link>

            <Link to="/home">
                <button id="home-page">Home</button>
            </Link>   
        </div>
    )

}

export default Navbar