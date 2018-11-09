import {
    CLEAR_ID_ACTION_MENU_IN_COLUMN,
    CLOSE_CARD_EDIT_MENU,
    CLOSE_SECONDARY_MENU,
    CREATE_COPY_LIST,
    HIDE_CARD_PREVIEW,
    ON_BLUR_NEW_CARD,
    ON_BLUR_NEW_LIST,
    ON_FOCUS_NEW_CARD,
    ON_FOCUS_NEW_LIST,
    RETURN_TO_ACTION_MENU,
    SET_ID_TO_OPEN_ACTION_MENU_IN_COLUMN,
    SET_OPEN_ID_COLUMN,
    SHOW_CARD_EDIT_MENU,
    SHOW_CARD_PREVIEW,
    SHOW_COPY_MENU,
    SHOW_MOVE_MENU
} from '../constants/constant';

import {
    onFocusNewCard,
    onBlurNewCard,
    setOpenIdColumn,
    onFocusNewList,
    onBlurNewList,
    setIdToOpenActionMenuInColumn,
    clearIdActionMenuInColumn,
    showCopyMenu,
    ReturnToActionMenu,
    closeSecondaryMenu,
    createCopyList,
    showMoveMenu,
    showCardPreview,
    hideCardPreview,
    showCardEditMenu,
    closeCardEditMenu
} from './kanban-property-utilities';

export let initialState = {};

export const menuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ON_FOCUS_NEW_CARD:
            return onFocusNewCard(state);
        case ON_BLUR_NEW_CARD:
            return onBlurNewCard(state);
        case SET_OPEN_ID_COLUMN:
            return setOpenIdColumn(state, payload);
        case ON_FOCUS_NEW_LIST:
            return onFocusNewList(state);
        case ON_BLUR_NEW_LIST:
            return onBlurNewList(state);
        case SET_ID_TO_OPEN_ACTION_MENU_IN_COLUMN:
            return setIdToOpenActionMenuInColumn(state, payload);
        case CLEAR_ID_ACTION_MENU_IN_COLUMN:
            return clearIdActionMenuInColumn(state, payload);
        case SHOW_COPY_MENU:
            return showCopyMenu(state);
        case RETURN_TO_ACTION_MENU:
            return ReturnToActionMenu(state);
        case CLOSE_SECONDARY_MENU:
            return closeSecondaryMenu(state);
        case CREATE_COPY_LIST:
            return createCopyList(state);
        case SHOW_MOVE_MENU:
            return showMoveMenu(state);
        case SHOW_CARD_PREVIEW:
            return showCardPreview(state, payload);
        case HIDE_CARD_PREVIEW:
            return hideCardPreview(state);
        case SHOW_CARD_EDIT_MENU:
            return showCardEditMenu(state, payload);
        case CLOSE_CARD_EDIT_MENU:
            return closeCardEditMenu(state);
        default:
            return state;
    }
};