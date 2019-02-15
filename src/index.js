//Dependencies
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

//My own code
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  //Any comp in our app can gain access to
  //the store through the Provider
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
