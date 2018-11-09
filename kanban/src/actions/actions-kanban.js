import {
    ADD_LIST,
    CHANGE_LIST_INPUT,
    DELETE_THIS_LIST,
    CHANGE_INPUT_VALUE_IN_COPY_MENU,
    CREATE_COPY_LIST,
    SAVE_SELECTED_MOVE_INDEX,
    MOVE_THE_COLUMN
} from '../constants/constant';

export const addNewList = payload => ({
    type: ADD_LIST,
    payload
});

export const onChangeNewListInput = payload => ({
    type: CHANGE_LIST_INPUT,
    payload
});

export const archiveThisList = payload => ({
    type: DELETE_THIS_LIST,
    payload
});

export const changeInputValueInCopyMenu = payload => ({
    type: CHANGE_INPUT_VALUE_IN_COPY_MENU,
    payload
});

export const createCopyList = payload => ({
    type: CREATE_COPY_LIST,
    payload
});

export const moveTheColumn = payload => ({
    type: MOVE_THE_COLUMN,
    payload
});

export const saveSelectMoveIndex = payload => ({
    type: SAVE_SELECTED_MOVE_INDEX,
    payload
});
