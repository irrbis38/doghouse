import React from 'react';

import style from './Input.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type?: string;
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  isError = false,
  helperText,
  ...props
}) => {
  const className = isError ? [style.input, style.input__error].join(' ') : style.input;

  return (
    <div className={className}>
      <input className={style.input__item} type={type} {...props} />
      {isError && helperText && <span className={style.input__validation}>{helperText}</span>}
    </div>
  );
};
