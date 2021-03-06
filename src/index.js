import React from 'react';
import ReactDOM, { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import rootSaga from './saga';
import routes from './routes'
import { history } from './services';


const store = configureStore()
store.runSaga(rootSaga)
render(<Root
    store={store}
    routes={routes}
    history={history} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA