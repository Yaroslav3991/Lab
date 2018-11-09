import uuid from 'uuid/v4';

export const getColumns = state => state.columns.map(column => ({ ...column }));

export const addList = state => ({
    ...state,
    columns: [
        ...state.columns,
        {
            name: state.newListInputValue,
            id: uuid(),
            cards: []
        }
    ],
    newListInputValue: ''
});
export const changeListInput = (state, payload) => ({
    ...state,
    newListInputValue: payload
});

export const deleteThisList = (state, payload) => ({
    ...state,
    columns: [...state.columns.filter(({ id }) => id !== payload.id)]
});

export const addCard = (state, { id }) => ({
    ...state,
    columns: [
        ...state.columns.map(column => {
            if (column.id === id) {
                return {
                    ...column,
                    cards: [
                        ...column.cards,
                        {
                            title: state.newCardInputValue,
                            id: uuid(),
                            description: ''
                        }
                    ]
                };
            }

            return column;
        })
    ],
    newCardInputValue: ''
});

export const changeCardInput = (state, payload) => ({
    ...state,
    newCardInputValue: payload
});

export const changeInputValueInCopyMenu = (state, payload) => ({
    ...state,
    copyInputValue: payload
});

export const createCopyList = (state, payload) => ({
    ...state,
    columns: [
        ...state.columns,
        {
            name: state.copyInputValue,
            id: uuid(),
            cards: [
                ...state.columns
                    .find(({ id }) => id === payload.id)
                    .cards.map(card => ({ ...card, id: uuid() }))
            ]
        }
    ],
    copyInputValue: ''
});

export const saveSelectedMoveIndex = (state, payload) => ({
    ...state,
    indexForMoveColumn: payload
});

export const moveTheColumn = (state, copyColumns, payload) => {
    let columnToMove = copyColumns.find(({ id }) => id === payload.id);

    let filteredColumns = copyColumns.filter(({ id }) => id !== payload.id);

    return {
        ...state,
        columns: [
            ...filteredColumns.slice(0, state.indexForMoveColumn),
            columnToMove,
            ...filteredColumns.splice(state.indexForMoveColumn)
        ]
    };
};

export const handleDescriptionChange = (state, payload) => ({
    ...state,
    descriptionValue: payload
});

export const addDescriptionToCard = (
    state,
    copyColumns,
    { idColumnOpenCard, idOpenCard }
) => {
    let copyCards = copyColumns.find(({ id }) => id === idColumnOpenCard).cards;

    copyColumns.find(({ id }) => id === idColumnOpenCard).cards = copyCards.map(
        card => {
            if (card.id === idOpenCard) {
                return { ...card, description: state.descriptionValue };
            }

            return card;
        }
    );

    return { ...state, columns: copyColumns };
};

export const handleCardTitleChange = (state, payload) => ({
    ...state,
    cardTitle: payload
});

export const saveChangeInCardTitle = (
    state,
    copyColumns,
    { idColumn, idCard }
) => {
    let copyCards = copyColumns.find(({ id }) => id === idColumn).cards;

    copyColumns.find(({ id }) => id === idColumn).cards = copyCards.map(
        card => {
            if (card.id === idCard) {
                return { ...card, title: state.cardTitle };
            }

            return card;
        }
    );

    return { ...state, columns: copyColumns, cardTitle: '' };
};

export const deleteCardById = (
    state,
    copyColumns,
    { idColumnOpenCard, idOpenCard }
) => {
    let copyCards = copyColumns.find(({ id }) => id === idColumnOpenCard).cards;

    copyColumns.find(
        ({ id }) => id === idColumnOpenCard
    ).cards = copyCards.filter(({ id }) => id !== idOpenCard);

    return { ...state, columns: [...copyColumns] };
};