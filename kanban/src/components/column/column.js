import React from 'react';
import { connect } from 'react-redux';

import './column.css';

import Cards from '../cards/cards';
import AddNewItem from '../add-new-item/add-new-item';
import ColumnActionMenu from '../column-action-menu/column-action-menu';
import CopyMenu from '../copy-menu/copy-menu';
import MoveMenu from '../move-menu/move-menu';
import Button from '../button/button';

import { CARD, MORE } from '../../constants/constant';

import {
    onAddNewCard,
    onBlurCreateNewCard,
    onChangeNewCardInput,
    onFocusCreateNewCard
} from '../../actions/action-card';

import { onClickColumnMenu, setOpenIdColumn } from '../../actions/actions-kanban-menu';

const Column = ({
    id,
    name,
    cards,
    newCardInputValue,
    idColumnActionMenu,
    isCopyMenuShowed,
    isActionMenuShowed,
    isMoveMenuShowed,
    isCreateNewCardFocused,
    openIdColumn,
    onClickColumnMenu,
    setOpenIdColumn,
    onAddNewCard,
    onChangeNewCardInput,
    onFocusCreateNewCard,
    onBlurCreateNewCard
}) => {
    const isMenuOpenInColumn = idColumnActionMenu === id;

    return (
        <div key={id} className="columns__wrapper">
            <div className="column">
                <div className="column-title">
                    <h3 className="column-title__name">{name}</h3>
                    {isMenuOpenInColumn && isActionMenuShowed ? (
                        <ColumnActionMenu id={id} />
                    ) : (
                        <Button
                            onClick={() => onClickColumnMenu(id)}
                            className="column-title__button"
                            value={MORE}
                        />
                    )}
                    {isCopyMenuShowed && isMenuOpenInColumn && <CopyMenu id={id} />}
                    {isMoveMenuShowed && isMenuOpenInColumn && <MoveMenu id={id} />}
                </div>
                <div className="column__cards">
                    <Cards cards={cards} idColumn={id} />
                </div>
                <AddNewItem
                    columnId={id}
                    setOpenIdColumn={setOpenIdColumn}
                    addNewItem={() => onAddNewCard({ id })}
                    item={CARD}
                    openIdColumn={openIdColumn}
                    isCreateFocused={isCreateNewCardFocused && id === openIdColumn}
                    onFocus={onFocusCreateNewCard}
                    onBlur={onBlurCreateNewCard}
                    newInputValue={newCardInputValue}
                    onChange={onChangeNewCardInput}
                />
            </div>
        </div>
    );
}

const mapStateToProps = ({
    kanban: { newCardInputValue },
    menuReducer: {
        idColumnActionMenu,
        isCopyMenuShowed,
        isActionMenuShowed,
        isMoveMenuShowed,
        isCreateNewCardFocused,
        openIdColumn
    }
}) => ({
    newCardInputValue,
    idColumnActionMenu,
    isCopyMenuShowed,
    isActionMenuShowed,
    isMoveMenuShowed,
    isCreateNewCardFocused,
    openIdColumn
});

const mapDispatchToProps = dispatch => ({
    onClickColumnMenu: payload => dispatch(onClickColumnMenu(payload)),
    setOpenIdColumn: payload => dispatch(setOpenIdColumn(payload)),
    onAddNewCard: payload => dispatch(onAddNewCard(payload)),
    onChangeNewCardInput: payload => dispatch(onChangeNewCardInput(payload)),
    onFocusCreateNewCard: payload => dispatch(onFocusCreateNewCard(payload)),
    onBlurCreateNewCard: payload => dispatch(onBlurCreateNewCard(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Column);