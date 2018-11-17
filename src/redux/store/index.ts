import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../modules';

export const configureStore = () => {
  let middleware;

  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    const { createLogger } = require('redux-logger');
    const logger = createLogger({ collapsed: true });
    middleware = composeWithDevTools(applyMiddleware(reduxThunk, logger));
  } else {
    middleware = applyMiddleware(reduxThunk);
  }
  const store = createStore(rootReducer, {}, middleware);

  return {
    store,
  };
};
