import React from 'react';
import { connect } from 'react-redux';

import './columns.css';

import AddNewItem from '../add-new-item/add-new-item';
import Column from '../column/column';

import { LIST } from '../../constants/constant';

import { addNewList, onChangeNewListInput } from '../../actions/actions-kanban';

import { onFocusCreateNewList, onBlurCreateNewList } from '../../actions/actions-kanban-menu';

const Columns = ({
    columns,
    newListInputValue,
    isCreateNewListFocused,
    addNewList,
    onChangeNewListInput,
    onFocusCreateNewList,
    onBlurCreateNewList
}) => (
    <div className="columns">
        {columns.map(({ id, name, cards }) => (
            <Column key={id} id={id} name={name} cards={cards} />
        ))}
        <AddNewItem
            addNewItem={() => addNewList()}
            item={LIST}
            onFocus={onFocusCreateNewList}
            onBlur={onBlurCreateNewList}
            isCreateFocused={isCreateNewListFocused}
            newInputValue={newListInputValue}
            onChange={onChangeNewListInput}
        />
    </div>
);

const mapStateToProps = ({ kanban: { columns, newListInputValue }, menuReducer: { isCreateNewListFocused } }) => {
    return {
        columns,
        newListInputValue,
        isCreateNewListFocused
    };
};

const mapDispatchToProps = dispatch => ({
    addNewList: payload => dispatch(addNewList(payload)),
    onChangeNewListInput: payload => dispatch(onChangeNewListInput(payload)),
    onFocusCreateNewList: payload => dispatch(onFocusCreateNewList(payload)),
    onBlurCreateNewList: payload => dispatch(onBlurCreateNewList(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Columns);
