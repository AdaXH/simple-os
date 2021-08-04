import React from 'react';
import ReactDom from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '@/layout';
import routes from '@/config/router.config';

import './global.less';

const App: React.FC<any> = () => {
  return (
    <Layout>
      <Router history={createHashHistory()}>
        <Switch>
          {routes.map(({ path, Component, exact }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Router>
    </Layout>
  );
};

ReactDom.render(<App />, document.querySelector('#simple-os-root'));
