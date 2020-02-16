import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from './DevTools'
import PropTypes from 'prop-types'


class Root extends Component {
    render() {
        const { store, routes, history } = this.props
        return (
            <Provider store={store}>
                <div>
                    <Router routes={routes} history={history} />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}
export default Root