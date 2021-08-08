import React from 'react';
import ReactDom from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Route, Redirect } from 'react-router-dom';
import Layout from '@/layout';
import { Transition } from '@/component/transition';
import routes from '@/config/router.config';

import './global.less';

const App: React.FC<any> = () => {
  const history = createHashHistory();
  return (
    <Layout history={history}>
      <Router history={history}>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} path={path} exact={exact}>
            {({ match }) => (
              <Transition match={match}>
                <Component history={history} />
              </Transition>
            )}
          </Route>
        ))}
        {/* <Redirect to="/" /> */}
      </Router>
    </Layout>
  );
};

ReactDom.render(<App />, document.querySelector('#simple-os-root'));
