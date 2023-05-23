import React from 'react';

import sytle from './Button.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children }) => (
  <button className={sytle.btn}>{children}</button>
);
