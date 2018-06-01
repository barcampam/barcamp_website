import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
      return (
          <Switch>
              <Route
                  exact
                  path={'/'}
                  component={asyncComponent(() => import('../Pages/Index'))}
              />
              <Route
                  exact
                  path={'/archive'}
                  component={asyncComponent(() => import('../Pages/Archive'))}
              />
              <Route
                  path={'/livestream'}
                  component={asyncComponent(() => import('../Pages/Livestream'))}
              />
              <Route
                  path={'/faq'}
                  component={asyncComponent(() => import('../Pages/FAQ'))}
              />
              <Route
                  path={'/about'}
                  component={asyncComponent(() => import('../Pages/About'))}
              />
          </Switch>
      );
  }
}

export default AppRouter;
