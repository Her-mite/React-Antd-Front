import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import storeTree from'./reduxStore'
import thunk from 'redux-thunk';
import Index from './main/index/index'
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Detail from './main/pages/Detail';

const store = createStore(storeTree, applyMiddleware(thunk));

ReactDOM.render(

  <Provider store={store}>
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
      {/* <HashRouter>
        <Index />
    </HashRouter> */}
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
