import React from 'react';
import { connect } from 'react-redux';

import './column-action-menu.css';
import Button from '../button/button';
import { ADD, CARD, CLOSE, COPY, DELETE_LIST, LIST, MOVE, NOT_SELECTED } from '../../constants/constant';

import { onFocusCreateNewCard } from '../../actions/action-card';
import { archiveThisList } from '../../actions/actions-kanban';
import { onCloseActionMenu, showCopyMenu, showMoveMenu, setOpenIdColumn } from '../../actions/actions-kanban-menu';

const ColumnActionMenu = ({
    id,
    archiveThisList,
    onCloseActionMenu,
    onFocusCreateNewCard,
    showCopyMenu,
    showMoveMenu,
    setOpenIdColumn
}) => {
    const addCard = id => {
        onFocusCreateNewCard();
        setOpenIdColumn(id);
        onCloseActionMenu(NOT_SELECTED);
    };

    return (
        <div className="action-menu">
            <header className="action-menu__header">
                <h6 className="header-name">Action menu</h6>
                <Button onClick={() => onCloseActionMenu(0)} className="header-button" value={CLOSE} />
            </header>
            <div className="action-buttons">
                <Button
                    className="action-buttons__button"
                    onClick={() => addCard(id)}
                    value={`${ADD} ${CARD}`}
                />
                <Button
                    className="action-buttons__button"
                    onClick={() => showCopyMenu(id)}
                    value={`${COPY} ${LIST}`}
                />
                <Button
                    className="action-buttons__button"
                    onClick={() => showMoveMenu(id)}
                    value={`${MOVE} ${LIST}`}
                />
                <Button
                    className="action-buttons__button"
                    onClick={() => archiveThisList({ id })}
                    value={DELETE_LIST}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    archiveThisList: payload => dispatch(archiveThisList(payload)),
    onCloseActionMenu: payload => dispatch(onCloseActionMenu(payload)),
    onFocusCreateNewCard: payload => dispatch(onFocusCreateNewCard(payload)),
    showCopyMenu: payload => dispatch(showCopyMenu(payload)),
    showMoveMenu: payload => dispatch(showMoveMenu(payload)),
    setOpenIdColumn: payload => dispatch(setOpenIdColumn(payload))
});

export default connect(
    null,
    mapDispatchToProps
)(ColumnActionMenu);
