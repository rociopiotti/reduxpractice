import React from "react";
import App from "./App";
import reducers from "./reducers/index";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware } from "redux";


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware) (createStore)


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
