import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
// import Root from "./components/root";

ReactDOM.render(
  <Provider store={store}>
    <div>hello, world!</div>, // <Root />
  </Provider>,
  document.getElementById("main")
);
