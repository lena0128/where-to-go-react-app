const initialState = {
   cities: [],
   loading: false
}

const cityReducer = (state = initialState, action) => {
   switch(action.type) {

      case "LOADING":
         return {
            ...state,
            loading: true
         }

       // below returns an NEW array, without modifying the original one 
       case "ADD_CITY":
           return {
              ...state,
              cities: [...state.cities, action.payload]  
           }

       // fetch data from the backend
       // note that our data is a bunch of objects in an array, we want to add a spread operator before the action.payload    
       case "FETCH_CITIES":
          return {
             ...state,
             cities: [...state.cities, ...action.payload],
             loading: false
          }

      default:
            return state    
   }
}

export default cityReducer