import { hot } from 'react-hot-loader';
import React from 'react';
import AppRouter from './routes';

const App = () => {
  return <AppRouter />;
};

export default hot(module)(App);
