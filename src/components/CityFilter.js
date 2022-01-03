import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import CityPage from './CityPage';

class CityFilter extends Component {

    // state = {
    //     search: ""
    //   }
 
    // handleInputChange = (e) => {
    //     this.setState({
    //         search: e.target.value
    //     })
    // }  


    render(){
        // const filterCity = this.props.cities.find((city) => city.name === this.state.search)

        return(
            <div id="city-filter" >
                <input type="text" placeholder="Search for a city..." onChange={this.props.handleInputChange} />
            </div>
        )
    }
}

export default CityFilter