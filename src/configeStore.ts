import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import createRootReducer from './store'

const enhancers: [] = []

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

    if (typeof devToolsExtension === 'function') {
        //@ts-ignore
        enhancers.push(devToolsExtension())
    }
}

function configureStore(preloadedState = {}) {
    return createStore(
        createRootReducer(),
        preloadedState,
        compose(
            applyMiddleware(thunk),
            ...enhancers
        )
    )
}

export default configureStore