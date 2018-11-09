import React from 'react';

const Input = ({ className, onClick, onFocus, placeholder, onChange, autoFocus, value }) => (
    <input
        className={className}
        onClick={onClick}
        onFocus={onFocus}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
        value={value}
    />
);

export default Input;
