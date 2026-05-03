import React from "react";
import ReactDOM from "react-dom";
import "./common/extionsion";
import "antd/dist/antd.less";
import "./common/css/color.less";
import App from "./routers";
import ConfigProvider from "./common/ConfigProvider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
