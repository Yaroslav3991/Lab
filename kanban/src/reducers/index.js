import { combineReducers } from 'redux';
import { kanban } from './kanban';
import { menuReducer } from './kanban-property';

const rootReducer = combineReducers({
    kanban,
    menuReducer
});

export default rootReducer;