import React from 'react';

const Button = ({className, callback, value}) => (
  <button
      className={className}
      onClick={callback}
  >{value}</button>
);

export default Button;