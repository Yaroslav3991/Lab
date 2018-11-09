import React from 'react';
import './add-new-item.css';
import { ENTER, TITLE, INPUT_PLACEHOLDER, ADD, CLOSE } from '../../constants/constant';
import Button from '../button/button';
import Input from '../input/input';

const AddNewItem = ({
    setOpenIdColumn,
    columnId,
    onFocus,
    onBlur,
    isCreateFocused,
    newInputValue,
    addNewItem,
    onChange,
    item
}) => {
    const setColumnId = () => {
        if (columnId) {
            setOpenIdColumn(columnId);
        }
    };

    const checkTitleAndAddItem = () => {
        const trimedTitle = newInputValue.trim();

        if (trimedTitle) {
            addNewItem();
        }
    };

    return (
        <div className="columns-creator">
            {isCreateFocused ? (
                <div className="create-new-list">
                    <Input
                        className="create-new-list__active-input"
                        placeholder={`${ENTER} ${item} ${TITLE}`}
                        value={newInputValue}
                        autoFocus={true}
                        onChange={({ target: { value } }) => onChange(value)}
                    />
                    <Button
                        className="create-new-list__button create-new-list__button--add"
                        onClick={checkTitleAndAddItem}
                        value={ADD}
                    />
                    <Button
                        className="create-new-list__button create-new-list__button--x"
                        onClick={onBlur}
                        value={CLOSE}
                    />
                </div>
            ) : (
                <Input
                    className="create-new-list__add-input"
                    onFocus={onFocus}
                    onClick={setColumnId}
                    placeholder={`${INPUT_PLACEHOLDER} ${item}`}
                />
            )}
        </div>
    );
};

export default AddNewItem;
