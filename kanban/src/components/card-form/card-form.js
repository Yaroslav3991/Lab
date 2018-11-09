import React from 'react';

import './card-form.css';
import Button from '../button/button';
import { TEXT_AREA_PLACEHOLDER, SAVE, DELETE_CARD, CLOSE } from '../../constants/constant';

const CardForm = ({
    title,
    description,
    saveDescription,
    hideCardPreview,
    handleDescriptionChange,
    deleteCardAndHideMenu
}) => (
    <div className="card-form-wrapper">
        <div className="card-form">
            <header className="card-header">
                <h6 className="card-header__title">{title}</h6>
                <Button
                    className="card-header__button"
                    onClick={hideCardPreview}
                    value={CLOSE}
                />
            </header>
            <form className="description" onSubmit={saveDescription}>
                <span className="description__title">Description</span>
                <textarea
                    className="description__input-field"
                    cols="30"
                    rows="10"
                    placeholder={TEXT_AREA_PLACEHOLDER}
                    defaultValue={description}
                    onChange={({ target: { value } }) => handleDescriptionChange(value)}
                />
                <Button
                    className="description__save-button"
                    value={SAVE}
                />
            </form>
            <Button
                className="card-form__delete-button"
                onClick={deleteCardAndHideMenu}
                value={DELETE_CARD}
            />
        </div>
    </div>
);

export default CardForm;