import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from 'reducers';
import async from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";

export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(async, stateValidator));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
