import React from 'react';

function CityFilter(props) {

        return(
            <div id="city-filter" >
                <input type="text" placeholder="Search for a city..." onChange={props.handleInputChange} />
                {props.search.length > 4 ? <button onClick={() => props.goBack()}>GO BACK</button> : "" }
            </div>
        )
}

export default CityFilter