import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <ul id="nav-bar">
            
            <Link to="/" className="nav-link">
              <li id="home-page">Home</li>
            </Link> 
            
            <Link to="/cities" className="nav-link">
              <li id="cities">Cities</li>
            </Link> 
            
            <Link to="/cities/new" className="nav-link">
              <li id="new-city">New City</li>
            </Link>

                <img src="https://logodix.com/logo/585455.png" alt="mockup logo" style={{width: "30px", float: "right", padding: "12px"}} />   
        </ul>
    )

}

export default Navbar