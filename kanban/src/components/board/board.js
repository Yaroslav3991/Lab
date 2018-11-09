import React from 'react';
import { connect } from 'react-redux';

import './board.css';

import Columns from '../columns/columns';
import CardForm from '../card-form/card-form';

import {
    addDescriptionToCard,
    deleteCardById,
    handleDescriptionChange,
    hideCardPreview
} from '../../actions/action-card';

const Board = ({
    name,
    id,
    columns,
    idOpenCard,
    idColumnOpenCard,
    isCardPreviewActive,
    handleDescriptionChange,
    addDescriptionToCard,
    deleteCardById,
    hideCardPreview
}) => {
    let openCard;

    if (idColumnOpenCard && idOpenCard) {
        openCard = columns
            .find(({ id: idColumn }) => idColumn === idColumnOpenCard)
            .cards.find(({ id: idCard }) => idCard === idOpenCard);
    }

    const saveDescription = e => {
        e.preventDefault();

        addDescriptionToCard({ idOpenCard, idColumnOpenCard });
        hideCardPreview();
    };

    const deleteCardAndHideMenu = () => {
        deleteCardById({ idOpenCard, idColumnOpenCard });
        hideCardPreview();
    };

    return (
        <div key={id} className="board">
            <h3 className="board__header">{name}</h3>
            <Columns />
            {isCardPreviewActive && (
                <CardForm
                    {...openCard}
                    hideCardPreview={hideCardPreview}
                    saveDescription={saveDescription}
                    handleDescriptionChange={handleDescriptionChange}
                    deleteCardAndHideMenu={deleteCardAndHideMenu}
                />
            )}
        </div>
    );
};

const mapStateToProps = ({
    kanban: { name, id, columns },
    menuReducer: { idOpenCard, idColumnOpenCard, isCardPreviewActive }
}) => ({
    name,
    id,
    columns,
    idOpenCard,
    idColumnOpenCard,
    isCardPreviewActive
});

const mapDispatchToProps = dispatch => ({
    handleDescriptionChange: payload => dispatch(handleDescriptionChange(payload)),
    addDescriptionToCard: payload => dispatch(addDescriptionToCard(payload)),
    deleteCardById: payload => dispatch(deleteCardById(payload)),
    hideCardPreview: payload => dispatch(hideCardPreview(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);