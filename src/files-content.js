const configStorFileContent = "\
import { createStore } from 'redux';\n\
import rootReducer from './reducers';\n\n\
export default createStore(rootReducer);";

const configStorFileContentThunk = "\
import thunk from 'redux-thunk';\n\
import createDebounce from 'redux-debounced';\n\
import { createStore, applyMiddleware, compose } from 'redux';\n\n\
import rootReducer from './reducers/index.js';\n\n\
//*  create middleware\n\
const middleware = [thunk, createDebounce()];\n\n\
//* Debug & Dev Tools\n\
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\n\n\
//* Create store\n\
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));\n\n\
export { store };"

const reducersIndexFileContent = "\
import { combineReducers } from 'redux';\n\
// import counterReducers from 'counter.reducer';\n\n\
export default combineReducers({\n\
  // counter: counterReducer\n\
});";

const actionsIndexFileContent = "\
// 'counter.actions' may hold multiple actions creators such as 'increment', 'decrement', etc.\n\
// export * from './counter.actions'; "

const reactIndexJSFileContent = "\
import React from 'react';\n\
import ReactDOM from 'react-dom';\n\
import { Provider } from 'react-redux'\n\
import * as serviceWorker from './serviceWorker';\n\n\
import './index.css';\n\
import storeConfig from './store/storeConfig'\n\
import App from './App';\n\n\
const store = storeConfig();\n\n\
const app = (\n\
  <Provider store={store} >\n\
    <App />\n\
  </Provider>\n\
);\n\n\
ReactDOM.render(app, document.getElementById('root'));\n\n\
// If you want your app to work offline and load faster, you can change\n\
// unregister() to register() below. Note this comes with some pitfalls.\n\
// Learn more about service workers: https://bit.ly/CRA-PWA\n\
serviceWorker.unregister();";

exports.configStore = configStorFileContent;
exports.configStoreThunk = configStorFileContentThunk;
exports.reducersIndex = reducersIndexFileContent;
exports.actionsIndex = actionsIndexFileContent;
exports.reactIndexJS = reactIndexJSFileContent;