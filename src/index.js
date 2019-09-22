import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes"

const App = () => {
  return <AppRouter/>;
};

ReactDOM.render(<App />, document.querySelector("#root"));