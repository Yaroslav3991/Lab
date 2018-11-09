import React from 'react';
import './ButtonSelection.css';

const ButtonSelection = ({selectFilter, isFilterActive, filterName, filterValue}) => (
        <label
            className='filter-filed'
            onClick={() => selectFilter(filterValue)}
        >
            <input
                type='radio'
                name='state'
                defaultChecked={isFilterActive}
                className='filter-filed__button filter-filed__button--hidden'
            />
            <span className={`filter-filed__title ${isFilterActive && 'select-filter'}`}>{filterName}</span>
        </label>
);

export default ButtonSelection;