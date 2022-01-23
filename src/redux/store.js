import { createStore, applyMiddleware } from 'redux'
import { compose } from 'redux'
import rootReducer from './reducer'
import background from "redux-background";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(background.middleware, thunk))
);

export default store;