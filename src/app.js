import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from 'layouts/app';

console.log('test');

// Components
import Test from 'ui/test';
import Test2 from 'ui/test2';

render(  
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Test} />
      <Route path="/test" component={Test2} />
      <Route path="/asdf" component={Test} />
    </Route>
  </Router>
, document.getElementById('app'));