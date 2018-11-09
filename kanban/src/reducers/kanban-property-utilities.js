import { NOT_SELECTED } from '../constants/constant';

export const onFocusNewCard = state => ({
    ...state,
    isCreateNewCardFocused: true,
    idColumnActionMenu: NOT_SELECTED
});

export const onBlurNewCard = state => ({
    ...state,
    isCreateNewCardFocused: false,
    openIdColumn: false
});

export const setOpenIdColumn = (state, payload) => ({
    ...state,
    openIdColumn: payload
});

export const onFocusNewList = state => ({
    ...state,
    isCreateNewListFocused: true,
    idColumnActionMenu: NOT_SELECTED
});

export const onBlurNewList = state => ({
    ...state,
    isCreateNewListFocused: false
});

export const setIdToOpenActionMenuInColumn = (state, payload) => ({
    ...state,
    idColumnActionMenu: payload,
    isActionMenuShowed: true,
    isCopyMenuShowed: false,
    isMoveMenuShowed: false
});

export const clearIdActionMenuInColumn = (state, payload) => ({
    ...state,
    idColumnActionMenu: payload,
    isActionMenuShowed: false,
    isMoveMenuShowed: false
});

export const showCopyMenu = state => ({
    ...state,
    isCopyMenuShowed: true,
    isActionMenuShowed: false,
    isMoveMenuShowed: false
});

export const ReturnToActionMenu = state => ({
    ...state,
    isCopyMenuShowed: false,
    isActionMenuShowed: true,
    isMoveMenuShowed: false
});

export const closeSecondaryMenu = state => ({
    ...state,
    isCopyMenuShowed: false,
    isActionMenuShowed: false,
    isMoveMenuShowed: false
});

export const createCopyList = state => ({ ...state, isCopyMenuShowed: false });

export const showMoveMenu = state => ({
    ...state,
    isMoveMenuShowed: true,
    isActionMenuShowed: false
});

export const showCardPreview = (state, { id, idColumn }) => ({
    ...state,
    isCardPreviewActive: true,
    idOpenCard: id,
    idColumnOpenCard: idColumn
});

export const hideCardPreview = state => ({
    ...state,
    isCardPreviewActive: false,
    idOpenCard: null
});

export const showCardEditMenu = (state, payload) => ({
    ...state,
    idCardForEdit: payload
});

export const closeCardEditMenu = state => ({ ...state, idCardForEdit: null });