import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import './index.css';
import App from './components/App';
import { addMovies } from './actions';
import movies from './reducers'


const store = configureStore({ reducer: movies})
console.log('store', store);
console.log("Before state", store.getState()); 

store.dispatch(
  addMovies( {name: 'Superman'})
 
)
console.log("After state", store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

