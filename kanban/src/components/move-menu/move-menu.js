import React from 'react';
import { connect } from 'react-redux';

import { BACK, MOVE, CLOSE, CURRENT } from '../../constants/constant';

import Button from '../button/button';

import { saveSelectMoveIndex, moveTheColumn } from '../../actions/actions-kanban';
import { returnToActionMenu, closeSecondaryMenu } from '../../actions/actions-kanban-menu';
import Option from '../option/option';

const MoveMenu = ({ id, saveSelectMoveIndex, moveTheColumn, returnToActionMenu, closeSecondaryMenu, columns }) => {
    const moveColumnById = id => {
        moveTheColumn({ id });
        closeSecondaryMenu();
    };

    return (
        <div className="action-menu">
            <header className="action-menu__header">
                <Button
                    className="header-button"
                    onClick={() => returnToActionMenu(id)}
                    value={BACK}
                />
                <h6 className="header-name">Move List</h6>
                <Button
                    className="header-button"
                    onClick={closeSecondaryMenu}
                    value={CLOSE}
                />
            </header>
            <span>Position</span>
            <select className="action-menu__select" onChange={({ target: { value } }) => saveSelectMoveIndex(value)}>
                <optgroup label="Position" className="optgroup">
                    {columns.map(({ id: idColumn }, index) => {
                        const columnNumber = index + 1;
                        const isSelected = id === idColumn;
                        const text = columnNumber + (isSelected && ` (${CURRENT})`);

                        return (
                            <Option
                                key={index}
                                value={index}
                                isSelected={isSelected}
                                text={text}
                            />
                        )
                    })}
                </optgroup>
            </select>
            <Button
                className="action-menu__createCopyList"
                onClick={() => moveColumnById(id)}
                value={MOVE}
            />
        </div>
    );
};

const mapStateToProps = ({ kanban: { columns } }) => ({
    columns
});

const mapDispatchToProps = dispatch => ({
    saveSelectMoveIndex: payload => dispatch(saveSelectMoveIndex(payload)),
    moveTheColumn: payload => dispatch(moveTheColumn(payload)),
    returnToActionMenu: payload => dispatch(returnToActionMenu(payload)),
    closeSecondaryMenu: payload => dispatch(closeSecondaryMenu(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoveMenu);
