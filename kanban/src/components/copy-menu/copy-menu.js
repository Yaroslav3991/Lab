import React from 'react';
import { connect } from 'react-redux';

import './copy-menu.css';
import { BACK, COPY, LIST, CLOSE } from '../../constants/constant';
import Button from '../button/button';
import Input from '../input/input';

import { changeInputValueInCopyMenu, createCopyList } from '../../actions/actions-kanban';
import { showCopyMenu, returnToActionMenu, closeSecondaryMenu } from '../../actions/actions-kanban-menu';

const CopyMenu = ({
    id,
    changeInputValueInCopyMenu,
    createCopyList,
    showCopyMenu,
    returnToActionMenu,
    closeSecondaryMenu,
    copyInputValue
}) => (
    <div className="action-menu">
        <header className="action-menu__header">
            <Button
                className="header-button"
                onClick={() => returnToActionMenu(id)}
                value={BACK}
            />
            <h6 className="header-name">Copy List</h6>
            <Button
                className="header-button"
                onClick={closeSecondaryMenu}
                value={CLOSE}
            />
        </header>
        <div className="action-menu__description">Name</div>
        <Input
            className="action-menu__copy-input"
            value={copyInputValue}
            autoFocus={true}
            onChange={({ target: { value } }) => changeInputValueInCopyMenu(value)}
        />
        <Button
            className="action-menu__createCopyList"
            onClick={() => createCopyList({ id })}
            value={`${COPY} ${LIST}`}
        />
    </div>
);

const mapStateToProps = ({ kanban: { copyInputValue } }) => ({
    copyInputValue
});

const mapDispatchToProps = dispatch => ({
    changeInputValueInCopyMenu: payload => dispatch(changeInputValueInCopyMenu(payload)),
    createCopyList: payload => dispatch(createCopyList(payload)),
    showCopyMenu: payload => dispatch(showCopyMenu(payload)),
    returnToActionMenu: payload => dispatch(returnToActionMenu(payload)),
    closeSecondaryMenu: payload => dispatch(closeSecondaryMenu(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CopyMenu);
