import { menuReducer, initialState } from './kanban-property';

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

describe('reducer kanban-property', () => {
    it('ON_FOCUS_NEW_CARD', () => {
        const action = {
            type: ON_FOCUS_NEW_CARD
        };

        const expectedState = {
            isCreateNewCardFocused: true,
            idColumnActionMenu: null
        };

        expect(menuReducer({}, action)).toEqual(expectedState);
    });

    it('ON_BLUR_NEW_CARD', () => {
        const action = {
            type: ON_BLUR_NEW_CARD
        };

        const expectedState = {
            isCreateNewCardFocused: false,
            openIdColumn: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('SET_OPEN_ID_COLUMN', () => {
        const action = {
            type: SET_OPEN_ID_COLUMN,
            payload: 'test'
        };

        const expectedState = {
            openIdColumn: 'test'
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('ON_FOCUS_NEW_LIST', () => {
        const action = {
            type: ON_FOCUS_NEW_LIST
        };

        const expectedState = {
            isCreateNewListFocused: true,
            idColumnActionMenu: null
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('ON_BLUR_NEW_LIST', () => {
        const action = {
            type: ON_BLUR_NEW_LIST
        };

        const expectedState = {
            isCreateNewListFocused: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('SET_ID_TO_OPEN_ACTION_MENU_IN_COLUMN', () => {
        const action = {
            type: SET_ID_TO_OPEN_ACTION_MENU_IN_COLUMN,
            payload: '1'
        };

        const expectedState = {
            idColumnActionMenu: '1',
            isActionMenuShowed: true,
            isCopyMenuShowed: false,
            isMoveMenuShowed: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('CLEAR_ID_ACTION_MENU_IN_COLUMN', () => {
        const action = {
            type: CLEAR_ID_ACTION_MENU_IN_COLUMN,
            payload: '2'
        };

        const expectedState = {
            idColumnActionMenu: '2',
            isActionMenuShowed: false,
            isMoveMenuShowed: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('SHOW_COPY_MENU', () => {
        const action = {
            type: SHOW_COPY_MENU
        };

        const expectedState = {
            isCopyMenuShowed: true,
            isActionMenuShowed: false,
            isMoveMenuShowed: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('RETURN_TO_ACTION_MENU', () => {
        const action = {
            type: RETURN_TO_ACTION_MENU
        };

        const expectedState = {
            isCopyMenuShowed: false,
            isActionMenuShowed: true,
            isMoveMenuShowed: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('CLOSE_SECONDARY_MENU', () => {
        const action = {
            type: CLOSE_SECONDARY_MENU
        };

        const expectedState = {
            isCopyMenuShowed: false,
            isActionMenuShowed: false,
            isMoveMenuShowed: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('CREATE_COPY_LIST', () => {
        const action = {
            type: CREATE_COPY_LIST
        };

        const expectedState = {
            isCopyMenuShowed: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('SHOW_MOVE_MENU', () => {
        const action = {
            type: SHOW_MOVE_MENU
        };

        const expectedState = {
            isMoveMenuShowed: true,
            isActionMenuShowed: false
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('SHOW_CARD_PREVIEW', () => {
        const action = {
            type: SHOW_CARD_PREVIEW,
            payload: {
                id: '1',
                idColumn: '2'
            }
        };

        const expectedState = {
            isCardPreviewActive: true,
            idOpenCard: '1',
            idColumnOpenCard: '2'
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('HIDE_CARD_PREVIEW', () => {
        const action = {
            type: HIDE_CARD_PREVIEW
        };

        const expectedState = {
            isCardPreviewActive: false,
            idOpenCard: null
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('SHOW_CARD_EDIT_MENU', () => {
        const action = {
            type: SHOW_CARD_EDIT_MENU,
            payload: '1'
        };

        const expectedState = {
            idCardForEdit: '1'
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('CLOSE_CARD_EDIT_MENU', () => {
        const action = {
            type: CLOSE_CARD_EDIT_MENU
        };

        const expectedState = {
            idCardForEdit: null
        };

        expect(menuReducer(initialState, action)).toEqual(expectedState);
    });

    it('DEFAULT', () => {
        const action = {};

        const state = {
            test: 'test'
        };

        const expectedState = { ...state };

        expect(menuReducer(state, action)).toEqual(expectedState);
    });
});