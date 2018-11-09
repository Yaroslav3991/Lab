import React from 'react';

const Button = ({callback, text, className, type}) => (
    <button
        className={className}
        onClick={callback}
        type={type}
    >{text}</button>
);

export default Button;