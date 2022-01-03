import React, { Component } from 'react';

class CityFilter extends Component {

    render(){
        return(
            <div id="city-filter" >
                <input type="text" placeholder="Search for a city..." onChange={this.props.handleInputChange} />
                <input type="submit" />
            </div>
        )
    }
}


export default CityFilter