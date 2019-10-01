import { hot } from "react-hot-loader";
import React from "react";
import AppRouter from "./routes";

const App = () => {
  return <AppRouter />;
  // return <MainLayout />
};

export default hot(module)(App);
