import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const routes = () => (
  <Router basename={process.env.PUBLIC_URL || '/onBoardingDemo'}>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

export default routes;
