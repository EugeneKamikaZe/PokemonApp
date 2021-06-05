import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'react-redux'
import createRootReducer from '../store'

const enhancers: [] = []

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

    if (typeof devToolsExtension === 'function') {
        //@ts-ignore
        enhancers.push(devToolsExtension)
    }
}

function configureStore(preloaderState = {}) {
    const store = createStore(
        createRootReducer,
        preloaderState,
        compose(
            applyMiddleware(thunk),
            ...enhancers
        )
    )

    return store
}

export default configureStore