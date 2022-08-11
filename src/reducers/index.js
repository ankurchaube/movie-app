import {ADD_MOVIES, ADD_FAVOURITE} from '../actions'
const initialMovieState = {
    list : [],
    favourites: []
}
export default function movies (state = initialMovieState, action) {
        // if (action.type === ADD_MOVIES){
        //     return {
        //         ...state,
        //         list: action.movies
        //     }
        // }
        // return state

        console.log("Redur", action.movies);

        switch (action.type) {
            case ADD_MOVIES:
                return{
                    ...state,
                    list: [ action.movies, ...state.list]
                }
            case ADD_FAVOURITE:
                return{
                    ...state,
                    favourites: [action.movie, ...state.favourites]
                }
        
            default:
                return state;
        }
}

