import {
    ADD_CARD,
    CHANGE_CARD_INPUT,
    ADD_DESCRIPTION_TO_CARD,
    HANDLE_DESCRIPTION_CHANGE,
    HANDLE_CARD_TITLE_CHANGE,
    SAVE_CHANGE_IN_CARD_TITLE_BY_ID,
    DELETE_CARD_BY_ID,
    ON_FOCUS_NEW_CARD,
    ON_BLUR_NEW_CARD,
    SHOW_CARD_PREVIEW,
    HIDE_CARD_PREVIEW,
    SHOW_CARD_EDIT_MENU,
    CLOSE_CARD_EDIT_MENU
} from '../constants/constant';

export const onAddNewCard = payload => ({
    type: ADD_CARD,
    payload
});

export const onChangeNewCardInput = payload => ({
    type: CHANGE_CARD_INPUT,
    payload
});

export const addDescriptionToCard = payload => ({
    type: ADD_DESCRIPTION_TO_CARD,
    payload
});

export const handleDescriptionChange = payload => ({
    type: HANDLE_DESCRIPTION_CHANGE,
    payload
});

export const handleCardTitleChange = payload => ({
    type: HANDLE_CARD_TITLE_CHANGE,
    payload
});

export const saveChangeInCardTitleById = payload => ({
    type: SAVE_CHANGE_IN_CARD_TITLE_BY_ID,
    payload
});

export const deleteCardById = payload => ({
    type: DELETE_CARD_BY_ID,
    payload
});

export const onFocusCreateNewCard = payload => ({
    type: ON_FOCUS_NEW_CARD,
    payload
});

export const onBlurCreateNewCard = payload => ({
    type: ON_BLUR_NEW_CARD,
    payload
});

export const showCardPreview = payload => ({
    type: SHOW_CARD_PREVIEW,
    payload
});

export const hideCardPreview = payload => ({
    type: HIDE_CARD_PREVIEW,
    payload
});

export const showCardEditMenu = payload => ({
    type: SHOW_CARD_EDIT_MENU,
    payload
});

export const closeCardEditMenu = payload => ({
    type: CLOSE_CARD_EDIT_MENU,
    payload
});