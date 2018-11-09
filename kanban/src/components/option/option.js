import React from 'react';

const Option = ({ value, isSelected, text }) => (
    <option selected={isSelected} value={value}>
        {text}
    </option>
);

export default Option;
