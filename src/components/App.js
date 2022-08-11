import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDDATED");
      this.forceUpdate();
    });
    // dispatch action
    store.dispatch(addMovies(data));
    console.log("STATE", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favourite } = this.props.store.getState();
    const index = favourite.indexOf(movie);

    if (index !== -1) {
      // found movie
      return true;
    }
    return false;
  };
  render() {
    const { list } = this.props.store.getState();
    console.log(list , "LIST");
    console.log(this.props.store.getState(), 'ERROR')
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies ${index}`}
                dispatch={this.props.store.dispatch}
                // isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
