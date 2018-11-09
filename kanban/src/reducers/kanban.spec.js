import { kanban, initialState } from './kanban';
import {
    ADD_CARD, ADD_DESCRIPTION_TO_CARD,
    CHANGE_CARD_INPUT,
    CHANGE_INPUT_VALUE_IN_COPY_MENU,
    CHANGE_LIST_INPUT,
    CREATE_COPY_LIST,
    DELETE_THIS_LIST, HANDLE_DESCRIPTION_CHANGE,
    MOVE_THE_COLUMN,
    SAVE_SELECTED_MOVE_INDEX
} from '../constants/constant';

import { getColumns } from './kanban-utilites';

jest.mock('uuid/v4', () => () => 42);

describe('reducers kanban', () => {
    it('ADD_LIST', () => {
        const action = {
            type: 'ADD_LIST'
        };

        const expectedState = {
            ...initialState,
            columns: [
                ...initialState.columns,
                {
                    name: initialState.newListInputValue,
                    id: 42,
                    cards: []
                }
            ],
            newListInputValue: ''
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    it('CHANGE_LIST_INPUT', () => {
        const action = {
            type: CHANGE_LIST_INPUT,
            payload: '1'
        };

        const expectedState = {
            ...initialState,
            newListInputValue: action.payload
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    it('DELETE_THIS_LIST', () => {
        const action = {
            type: DELETE_THIS_LIST,
            payload: { id: '1' }
        };

        const expectedState = {
            ...initialState,
            columns: [
                ...initialState.columns.filter(
                    ({ id }) => id !== action.payload.id
                )
            ]
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    it('ADD_CARD', () => {
        const action = {
            type: ADD_CARD,
            payload: { id: initialState.columns[0].id }
        };

        const expectedState = {
            ...initialState,
            columns: [
                ...initialState.columns.map(column => {
                    if (column.id === action.payload.id) {
                        return {
                            ...column,
                            cards: [
                                ...column.cards,
                                {
                                    title: initialState.newCardInputValue,
                                    id: 42,
                                    description: ''
                                }
                            ]
                        };
                    }

                    return column;
                })
            ],
            newCardInputValue: ''
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    it('CHANGE_CARD_INPUT', () => {
        const action = {
            type: CHANGE_CARD_INPUT,
            payload: '1'
        };

        const expectedState = {
            ...initialState,
            newCardInputValue: action.payload
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    it('CHANGE_INPUT_VALUE_IN_COPY_MENU', () => {
        const action = {
            type: CHANGE_INPUT_VALUE_IN_COPY_MENU,
            payload: '1'
        };

        const expectedState = {
            ...initialState,
            copyInputValue: action.payload
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    it('CREATE_COPY_LIST', () => {
        const action = {
            type: CREATE_COPY_LIST,
            payload: { id: initialState.columns[0].id }
        };

        const expectedState = {
            ...initialState,
            columns: [
                ...initialState.columns,
                {
                    name: initialState.copyInputValue,
                    id: 42,
                    cards: [
                        ...initialState.columns
                            .find(({ id }) => id === action.payload.id)
                            .cards.map(card => ({ ...card, id: 42 }))
                    ]
                }
            ],
            copyInputValue: ''
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    it('SAVE_SELECTED_MOVE_INDEX', () => {
        const action = {
            type: SAVE_SELECTED_MOVE_INDEX,
            payload: '2'
        };

        const expectedState = {
            ...initialState,
            indexForMoveColumn: '2'
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    it('MOVE_THE_COLUMN', () => {
        const action = {
            type: MOVE_THE_COLUMN,
            payload: { id: initialState.columns[0].id }
        };

        const expectedState = {
            ...initialState,
            columns: [
                ...getColumns(initialState)
                    .filter(({ id }) => id !== action.payload.id)
                    .slice(0, initialState.indexForMoveColumn),
                getColumns(initialState).find(
                    ({ id }) => id === action.payload.id
                ),
                ...getColumns(initialState)
                    .filter(({ id }) => id !== action.payload.id)
                    .splice(initialState.indexForMoveColumn)
            ]
        };

        expect(kanban(initialState, action)).toEqual(expectedState);
    });

    //HANDLE_DESCRIPTION_CHANGE

    //ADD_DESCRIPTION_TO_CARD

    //HANDLE_CARD_TITLE_CHANGE

    //SAVE_CHANGE_IN_CARD_TITLE_BY_ID

    //DELETE_CARD_BY_ID

    //DEFAULT
});