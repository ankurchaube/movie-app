// {
//     type: "ADD_MOVIES"
//     movies: ['m1','m2','m3']
// }
// {
//     type: "DECREASE_COUNT"
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SHOW_ALL_MOVIES = 'SHOW_ALL_MOVIES';
export const SHOW_FAVOURITE_MOVIES = 'SHOW_FAVOURITE_MOVIES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES';



//action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addToFavourites(movie){
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFromFavourites(movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function showAllMovies(){
   return {
        type: SHOW_ALL_MOVIES,
    }
}

export function showFavouriteMovies(){
    return {
        type: SHOW_FAVOURITE_MOVIES,
     }
 }

 export function handleMovieSearch(movie){
     const url = `http://www.omdbapi.com/?i=tt3896198&apikey=c39bd082&&t=${movie}`;

     return function(dispatch){
         fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log('movie',movie);
                //dispatch an action 
                dispatch(addSearchResult(movie));
            });
     }
 }

 export function addSearchResult(movie){
    return{
        type: ADD_SEARCH_RESULT,
        movie
    }
 }

 export function addToMovies(movie){
    return{
        type: ADD_TO_MOVIES,
        movie
    }
 }