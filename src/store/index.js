import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import reduxThunk from "redux-thunk"

import posts from "./posts_reducer.js";

//you apply any middleware here
const createStoreWithMiddleware = applyMiddleware(reduxThunk, promiseMiddleware(), logger)(
	createStore
);

const store = combineReducers({
	posts
});

export default createStoreWithMiddleware(
	store,
	//you will need Redux Chrome Extension
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
