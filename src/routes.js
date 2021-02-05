import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AccountsList from './pages/AccountsList/AccountsList';
import AccountDetail from './pages/AccountDetail/AccountDetail';

const routes = () => (
  <Router basename={process.env.PUBLIC_URL || '/onBoardingDemo'}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/accountsList" component={AccountsList} />
      <Route path="/accountsList/:accountId" component={AccountDetail} />
    </div>
  </Router>
);

export default routes;
