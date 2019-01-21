import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import Reducer from "./reducers";
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();
let middleware;
if (process.env.NODE_ENV !== "production") {
    middleware = applyMiddleware(logger, epicMiddleware);
}
const store = createStore(Reducer, middleware);

epicMiddleware.run(rootEpic);
export default store;