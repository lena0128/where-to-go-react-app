
const baseUrl = "http://localhost:5000/cities"

// the cityObj will the object that we get from the CityForm
export const addCity = (cityObj) => {
    return {
       type: "ADD_CITY",
       payload: cityObj
    }
}


export const updateCity = (updatedCityObj) => {
    return {
        type: "UPDATE_CITY",
        payload: updatedCityObj
    }
}

// an action returns a plain object
// with thunk it allows us to access dispatch in our action and return a FUNCTION so that we can make a fetch request 
export const fetchCities = () => {
    return (dispatch) => {
        // when we make a fetch request, we want to set the loading state to true
        dispatch({type: "LOADING"})

        fetch(baseUrl)
        .then(resp => resp.json())
        .then(cities => {
            dispatch({
                type: "FETCH_CITIES", 
                payload: cities
            })
        })
    }
}

export const createCity = (city) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
            },
            body: JSON.stringify({ city })
        }
        fetch(baseUrl, configObj)
          .then(resp => resp.json())
          .then(city => {
              dispatch(addCity(city))
          })
    }

}
