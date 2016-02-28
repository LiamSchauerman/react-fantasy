import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { NewHome } from 'containers/newHome/NewHome';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NewHome} />

    <Route status={404} path="*" component={NewHome} />
  </Route>
);
