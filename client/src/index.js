import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import store from "./data/index";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
