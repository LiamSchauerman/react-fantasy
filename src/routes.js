import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
console.log(App);
import { Home } from 'containers/Home';
import { NewHome } from 'containers/newHome/NewHome';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NewHome} />

    <Route status={404} path="*" component={Home} />
  </Route>
);
