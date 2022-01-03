import React, { Component } from 'react';

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

    render(){
        return(
            <div id="city-form">    
                <form>
                    <h3>Add a New City</h3>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="country">Name: </label>
                        <input type="text" id="country" name="country" value={this.state.country} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="image">Name: </label>
                        <input type="text" id="image" name="image" value={this.state.image} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="summary">Name: </label>
                        <input type="text" id="summary" name="summary" value={this.state.summary} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="content">Name: </label>
                        <input type="text" id="content" name="content" value={this.state.content} onChange={this.handleChange} />
                    </div>

                    <div>
                        <input type="submit" value="Create" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CityForm