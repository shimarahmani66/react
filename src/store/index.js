import { applyMiddleware, createStore,compose } from "redux"
import reducers from './../reducers';
import thunk from 'redux-thunk';
import { useSelector } from "react-redux";


export const store=createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
)
store.subscribe(()=>console.log(store.getState()));