import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist'

import createLogger from 'redux-logger';
const logger = createLogger();

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  compose(
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(thunk)
      : applyMiddleware(thunk, logger),
    autoRehydrate()
  )
);
persistStore(store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
