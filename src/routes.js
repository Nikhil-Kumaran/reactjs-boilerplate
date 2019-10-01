import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "pages/home/Home";
import About from "pages/about/About";
import Contact from "pages/contact/Contact";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Route path="/" exact render={routeprops => <Home text="Welcome home" {...routeprops} />} />
        <Route path="/about" render={routeprops => <About {...routeprops} />} />
        <Route path="/contact" render={routeprops => <Contact {...routeprops} />} />
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
