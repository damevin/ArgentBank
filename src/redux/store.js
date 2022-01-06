import { createStore, applyMiddleware } from "redux";
import { userAuthentification } from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(userAuthentification, applyMiddleware(thunk));

