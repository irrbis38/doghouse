import React from 'react';

import './Button.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children }) => (
  <button className='btn'>{children}</button>
);
