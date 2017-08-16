import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';

import SSCC from './redux/reducers';
import App from './views/App';
import Home from './views/Home';
import About from './views/About';

let store = createStore(SSCC);

const Root = () => (
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path='/'component={ App }>
        <IndexRoute component={ Home } />
        <Route path='about'component={ About } />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<Root/>, document.getElementById('app'));
