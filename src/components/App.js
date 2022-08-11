import React from 'react';

import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, showAllMovies, showFavouriteMovies} from '../actions';
import {connect} from 'react-redux';

class App extends React.Component {

  // constructor(){
  //   super();
  //   this.showFavourites = false;
  // }
  
  componentDidMount() {
    const {dispatch} = this.props;
    //make api call
    //dispatch action

    // store.subscribe(() => this.forceUpdate());

    // console.log('state before mount',store.getState());

    dispatch(addMovies(data));

    // console.log('state after mount',store.getState());
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props;
    const {favourites} = movies;

    const index = favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  handleAllMovies = () => {
    const {dispatch} = this.props;
    dispatch(showAllMovies());
  }

  handleFavouriteMovies = () => {
    const {dispatch} = this.props;
    dispatch(showFavouriteMovies());
  }

  render() {
    const {movies} = this.props; //{ movies: {}, search: {} }
    const {list,favourites,showFavourites} = movies
    const moviesList = showFavourites ? favourites : list;
    
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={this.handleAllMovies}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={this.handleFavouriteMovies}>Favourites</div>
          </div>
          <div className="list">
            {moviesList.map((movie,index) => (
              <MovieCard   
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
                />
            ))}
          </div>
          {moviesList.length === 0 ? <div className='no-movies'>No Movies To Display!</div>: null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render() {
//     return(
//       <StoreContext.Consumer>
//         {(store) => <App store={store}/>}
//       </StoreContext.Consumer>);
//     }
// }

function mapStateToProps(state){
  return{
    movies: state.movies,
    search: state.search
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
