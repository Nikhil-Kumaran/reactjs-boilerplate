import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
  const { path, routes } = route;
  return <Route path={path} render={(props) => <route.component {...props} routes={routes} />} />;
};

export default RouteWithSubRoutes;
