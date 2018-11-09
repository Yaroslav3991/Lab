import React from 'react';
import './card-editor.css';
import Input from '../input/input';
import Button from '../button/button';
import { SAVE, CLOSE } from '../../constants/constant';

const CardEditor = ({
    title,
    idCard,
    idColumn,
    closeCardEditMenu,
    handleCardTitleChange,
    cardTitle,
    saveChangeInCardTitleById
}) => {
    cardTitle = cardTitle || title;

    const saveChanges = () => {
        const trimmedTitle = cardTitle.trim();

        if (trimmedTitle !== title) {
            saveChangeInCardTitleById({ idCard, idColumn });
        }

        closeCardEditMenu();
    };

    return (
        <div className="card-editor">
            <Input
                className="card-editor__input"
                value={cardTitle}
                autoFocus={true}
                onChange={({ target: { value } }) => handleCardTitleChange(value)}
            />
            <Button
                className="card-editor__save-button"
                onClick={saveChanges}
                value={SAVE}
            />
            <Button
                className="card-editor__close-button"
                onClick={closeCardEditMenu}
                value={CLOSE}
            />
        </div>
    );
};

export default CardEditor;
