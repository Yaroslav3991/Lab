import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kanban from './kanban';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from "./reducers/index";

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Kanban />
    </Provider>
    , document.getElementById('kanban'));