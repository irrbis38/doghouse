import React from 'react';

import './Input.scss';

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
  const className = isError ? 'input input__error' : 'input';

  return (
    <div className={className}>
      <input className='input__item' type={type} {...props} />
      {isError && helperText && <span className='input__validation'>{helperText}</span>}
    </div>
  );
};
