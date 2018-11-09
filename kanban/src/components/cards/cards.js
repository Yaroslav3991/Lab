import React from 'react';
import { connect } from 'react-redux';

import './cards.css';

import CardEditor from '../card-editor/card-editor';
import Button from '../button/button';

import { EDIT } from '../../constants/constant';
import {
    handleCardTitleChange,
    saveChangeInCardTitleById,
    showCardPreview,
    showCardEditMenu,
    closeCardEditMenu
} from '../../actions/action-card';

const Cards = ({
    cards,
    idColumn,
    cardTitle,
    idCardForEdit,
    handleCardTitleChange,
    saveChangeInCardTitleById,
    showCardPreview,
    showCardEditMenu,
    closeCardEditMenu
}) => (
    <div className="cards">
        {cards
            ? cards.map(
                ({ title, id }) =>
                    idCardForEdit === id ? (
                        <CardEditor
                          key={id}
                          title={title}
                          idCard={id}
                          idColumn={idColumn}
                          closeCardEditMenu={closeCardEditMenu}
                          handleCardTitleChange={handleCardTitleChange}
                          cardTitle={cardTitle}
                          saveChangeInCardTitleById={saveChangeInCardTitleById}
                        />
                        ) : (
                        <div key={id} className="card">
                          <span className="card__name"
                              onClick={() => showCardPreview({ id, idColumn })}
                          >
                              {title}
                          </span>
                          <Button
                              className="card__button"
                              onClick={() => showCardEditMenu(id)}
                              value={EDIT}
                          />
                        </div>
                    )
                )
            : null}
    </div>
);

const mapStateToProps = ({ kanban: { cardTitle }, menuReducer: { idCardForEdit } }) => ({
    cardTitle,
    idCardForEdit
});

const mapDispatchToProps = dispatch => ({
    handleCardTitleChange: payload => dispatch(handleCardTitleChange(payload)),
    saveChangeInCardTitleById: payload => dispatch(saveChangeInCardTitleById(payload)),
    showCardPreview: payload => dispatch(showCardPreview(payload)),
    showCardEditMenu: payload => dispatch(showCardEditMenu(payload)),
    closeCardEditMenu: payload => dispatch(closeCardEditMenu(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);