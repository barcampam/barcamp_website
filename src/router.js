import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './containers/App';

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          path={'/'}
          component={App}
        />
      </div>
    </ConnectedRouter>
  );
};

export default PublicRoutes;
