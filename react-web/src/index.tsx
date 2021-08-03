import React from 'react';
import ReactDom from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from '@/config/router.config';

// import styles from './styles.less';
import './global.less';

const App: React.FC<any> = () => {
  return (
    <Router history={createHashHistory()}>
      <Switch>
        {routes.map(({ path, Component, exact }) => (
          <Route path={path} exact={exact} component={Component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

ReactDom.render(<App />, document.querySelector('#simple-os-root'));
