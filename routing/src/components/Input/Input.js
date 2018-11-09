import React from 'react';

const Input = ({required, type, placeholder, className, value, onChange, accept}) => (
    <input
        required={required}
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        accept={accept}
    />
);

export default Input;
