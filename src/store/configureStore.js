import { createStore, applyMiddleware, compose } from "redux";
import sagaMonitor from '@redux-saga/simple-saga-monitor'
import createSagaMiddleware, { END } from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducers from "../reducers";
import DevTools from "../containers/DevTools";

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware({sagaMonitor})

    const allMiddleware = compose(applyMiddleware(sagaMiddleware, createLogger()),DevTools.instrument())
    const store = createStore(
        rootReducers,
        allMiddleware
    )

    store.run = sagaMiddleware.run
    store.close = store.dispatch(END)

    return store
}
