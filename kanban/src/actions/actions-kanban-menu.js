import {
    ON_FOCUS_NEW_LIST,
    ON_BLUR_NEW_LIST,
    SET_ID_TO_OPEN_ACTION_MENU_IN_COLUMN,
    CLEAR_ID_ACTION_MENU_IN_COLUMN,
    SET_OPEN_ID_COLUMN,
    SHOW_COPY_MENU,
    RETURN_TO_ACTION_MENU,
    CLOSE_SECONDARY_MENU,
    SHOW_MOVE_MENU
} from '../constants/constant';

export const onFocusCreateNewList = payload => ({
    type: ON_FOCUS_NEW_LIST,
    payload
});

export const onBlurCreateNewList = payload => ({
    type: ON_BLUR_NEW_LIST,
    payload
});

export const onClickColumnMenu = payload => ({
    type: SET_ID_TO_OPEN_ACTION_MENU_IN_COLUMN,
    payload
});

export const onCloseActionMenu = payload => ({
    type: CLEAR_ID_ACTION_MENU_IN_COLUMN,
    payload
});

export const setOpenIdColumn = payload => ({
    type: SET_OPEN_ID_COLUMN,
    payload
});

export const showCopyMenu = payload => ({
    type: SHOW_COPY_MENU,
    payload
});

export const returnToActionMenu = payload => ({
    type: RETURN_TO_ACTION_MENU,
    payload
});

export const closeSecondaryMenu = payload => ({
    type: CLOSE_SECONDARY_MENU,
    payload
});

export const showMoveMenu = payload => ({
    type: SHOW_MOVE_MENU,
    payload
});
