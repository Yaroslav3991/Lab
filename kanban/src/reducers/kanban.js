import uuid from 'uuid/v4';

import {
    getColumns,
    addList,
    changeListInput,
    deleteThisList,
    addCard,
    changeCardInput,
    changeInputValueInCopyMenu,
    createCopyList,
    saveSelectedMoveIndex,
    moveTheColumn,
    handleDescriptionChange,
    addDescriptionToCard,
    handleCardTitleChange,
    saveChangeInCardTitle,
    deleteCardById
} from './kanban-utilites';

import {
    ADD_CARD,
    ADD_DESCRIPTION_TO_CARD,
    ADD_LIST,
    DELETE_THIS_LIST,
    CHANGE_CARD_INPUT,
    CHANGE_INPUT_VALUE_IN_COPY_MENU,
    CHANGE_LIST_INPUT,
    CREATE_COPY_LIST,
    DELETE_CARD_BY_ID,
    HANDLE_CARD_TITLE_CHANGE,
    HANDLE_DESCRIPTION_CHANGE,
    MOVE_THE_COLUMN,
    SAVE_CHANGE_IN_CARD_TITLE_BY_ID,
    SAVE_SELECTED_MOVE_INDEX
} from '../constants/constant';

export const initialState = {
    name: 'Hello Trello',
    columns: [
        {
            name: 'Column 1',
            id: uuid(),
            cards: [
                {
                    title: 'Card 1',
                    description: '',
                    id: uuid()
                }
            ]
        }
    ],
    newListInputValue: '',
    newCardInputValue: '',
    copyInputValue: '',
    descriptionValue: '',
    cardTitle: ''
};

export const kanban = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_LIST:
            return addList(state);
        case CHANGE_LIST_INPUT:
            return changeListInput(state, payload);
        case DELETE_THIS_LIST:
            return deleteThisList(state, payload);
        case ADD_CARD:
            return addCard(state, payload);
        case CHANGE_CARD_INPUT:
            return changeCardInput(state, payload);
        case CHANGE_INPUT_VALUE_IN_COPY_MENU:
            return changeInputValueInCopyMenu(state, payload);
        case CREATE_COPY_LIST:
            return createCopyList(state, payload);
        case SAVE_SELECTED_MOVE_INDEX:
            return saveSelectedMoveIndex(state, payload);
        case MOVE_THE_COLUMN:
            return moveTheColumn(state, getColumns(state), payload);
        case HANDLE_DESCRIPTION_CHANGE:
            return handleDescriptionChange(state, payload);
        case ADD_DESCRIPTION_TO_CARD:
            return addDescriptionToCard(state, getColumns(state), payload);
        case HANDLE_CARD_TITLE_CHANGE:
            return handleCardTitleChange(state, payload);
        case SAVE_CHANGE_IN_CARD_TITLE_BY_ID:
            return saveChangeInCardTitle(state, getColumns(state), payload);
        case DELETE_CARD_BY_ID:
            return deleteCardById(state, getColumns(state), payload);
        default:
            return state;
    }
};