import React from 'react';

const Button = ({ className, onClick, value }) => (
    <button className={className} onClick={onClick}>
        {value}
    </button>
);

export default Button;