import { legacy_createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = legacy_createStore(rootReducer, enhancer);