import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import card from './modules/card';
import { composeWithDevTools } from 'redux-devtools-extension';

// export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({card});
const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;