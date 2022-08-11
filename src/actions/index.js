// {
//     type: 'ADD_MOVIES'
//     movies: [m1, m2, m3]

// }

// {
//     type: 'DECREASE_COUNT'
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export function addMovies (movies){
    console.log(movies, "Movies");
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourites (movie){
    return {
        type: ADD_FAVOURITE,
        movie
    }
}