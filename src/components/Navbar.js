import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <ul id="nav-bar"> 
            
            <Link to="/cities" className="nav-link">
              <li id="cities">DESTINATIONS</li>
            </Link> 
            
            <Link to="/cities/new" className="nav-link">
              <li id="new-city">NEW DESTINATION</li>
            </Link>

            <Link to="/guides" className="nav-link">
              <li id="guides">TRAVEL GUIDES</li>
            </Link>

                <img src="https://logodix.com/logo/585455.png" alt="mockup logo" style={{width: "30px", float: "right", padding: "12px"}} />   
        </ul>
    )

}

export default Navbar