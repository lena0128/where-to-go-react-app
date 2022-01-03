const initialState = {
   cities: []
}

const cityReducer = (state = initialState, action) => {
   switch(action.type) {
       // below returns an NEW array, without modifying the original one 
       case "ADD_CITY":
           return {
              ...state,
              cities: [...state.cities, action.payload]  
           }

        default:
            return state    
   }
}

export default cityReducer