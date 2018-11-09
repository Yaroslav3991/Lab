import React from 'react';

const Checkbox = ({className, onChange, checked}) => {
    return (
        <input
            type='checkbox'
            className={className}
            onChange={onChange}
            checked={checked}
        />
    );
};

export default Checkbox;