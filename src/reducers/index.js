import { combineReducers } from "redux";
import { ADD_MOVIES,
        REMOVE_FROM_FAVOURITES,
        ADD_TO_FAVOURITES,
        SHOW_ALL_MOVIES, 
        SHOW_FAVOURITE_MOVIES,  
        ADD_SEARCH_RESULT, ADD_TO_MOVIES} from "../actions";


const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMovieState,action){
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(movie => 
                movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourites: filteredArray
            }
        case SHOW_ALL_MOVIES:
            return{
                ...state,
                showFavourites: false
            }
        case SHOW_FAVOURITE_MOVIES:
            return{
                ...state,
                showFavourites: true
            }
        case ADD_TO_MOVIES:
            return{
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;
    }
} 

const initialSearchState = {
    result: {},
    showSearchResult: false
};

export function search(state = initialSearchState, action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result: action.movie,
                showSearchResult: true
            }
        case ADD_TO_MOVIES:
            return{
                ...state,
                showSearchResult: false
            }
        default:
            return state
    }
}

// const initialRootState = {
//     movies: initialMovieState,
//     search: initialSearchState
// }

// export default function rootReducer(state = initialRootState, action){
//     return {
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }

export default combineReducers({
    movies: movies,
    search: search
});