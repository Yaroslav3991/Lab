import React from 'react';

const Input = ({className, value, placeholder, onChange, ref, onKeyDown}) => {
    return (
        <input
            type='text'
            className={className}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
            onKeyDown={onKeyDown}
            autoFocus
        />
    );
};

export default Input;