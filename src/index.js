import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './reducers/cartReducer';
import { createLogger } from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(cartReducer, applyMiddleware(createLogger()));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
