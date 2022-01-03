

// the cityObj will the object that we get from the CityForm
export const addCity = (cityObj) => {
    return{
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