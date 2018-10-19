import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {
  App,
  Home,
  Login,
  Register,
  Wall,
  Detail,
  Main,
  Sell,
  WallCategory
} from 'containers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk)
);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="home" component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="wall/:username" component={Wall} />
        <Route path="wallCategory/:category" component={WallCategory} />
        <Route path="detail/:dataid" component={Detail} />
        <Route path="main" component={Main} />
        <Route path="sell" component={Sell} />
      </Route>
    </Router>
  </Provider>,
  rootElement
);
