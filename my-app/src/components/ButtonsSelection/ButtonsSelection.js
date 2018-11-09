import React from 'react';
import ButtonSelection from "../ButtonSelection/ButtonSelection";

const ButtonsSelection = ({selectFilter, selectedFilterForTasks, filters}) => (
    <div className='filters'>
        {filters.map(({filterName, id, filterValue, isActive}) => (
            <ButtonSelection
                key={id}
                filterName={filterName}
                selectFilter={selectFilter}
                isFilterActive={isActive}
                filterValue={filterValue}
            />
        ))
        }
    </div>
);

export default ButtonsSelection;