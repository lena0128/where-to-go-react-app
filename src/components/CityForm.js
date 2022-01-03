import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions/cityActions'

class CityForm extends Component {

    // we need the local state in the new form because this state doesn't to be known from other components
    state = {
        name: "",
        country: "",
        image: "",
        summary: "",
        content: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()

        // we need to find a way to send this city object to the reducer
        this.props.addCity(this.state) 


        this.setState({
            name: "",
            country: "",
            image: "",
            summary: "",
            content: "",
        })
    }

    render(){
        return(
            <div id="city-form">    
                <form onSubmit={this.handleSubmit} >
                    <h3>Add a New City</h3>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="country">Country: </label>
                        <input type="text" id="country" name="country" value={this.state.country} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="image">Image URL: </label>
                        <input type="text" id="image" name="image" value={this.state.image} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="summary">Summary: </label>
                        <input type="text" id="summary" name="summary" value={this.state.summary} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="content">Content: </label>
                        <input type="text" id="content" name="content" value={this.state.content} onChange={this.handleChange} />
                    </div><br />

                    <div>
                        <input type="submit" value="Create" />
                    </div>
                </form>
            </div>
        )
    }
}

// dispatch is how we connect to our reducer
// dispatch(action) is how we pass our action
const mapDispatchToProps = (dispatch) => {
    return {
        addCity: (cityObj) => dispatch(addCity(cityObj))
    }

}

export default connect(null, mapDispatchToProps)(CityForm)