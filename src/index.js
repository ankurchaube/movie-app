
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import './index.css';
import App from './components/App';

// const logger = function({dispatch, getState}){
//   return function(next){
//     return function(action){
  
//       //middleware code
//       console.log('ACTION TYPE = ',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
  //middleware Code
  if(typeof action !== 'function'){
    console.log('ACTION TYPE = ',action.type);
  }
  next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   //middleware Code
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }


const store = createStore(rootReducer,applyMiddleware(logger,thunk));

// export const StoreContext = createContext();

// class Provider extends React.Component{
//   render() {
//     const {store} = this.props;
//     return(
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     )
//   }
// }

// export function connect(callback){
//   return function (Component){
//     class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const {store} = this.props;
//         const dataToBePassedAsProps = callback(store.getState());
//         return(
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//         );
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return(
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store}/>}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
// }

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

