import React from 'react';

import { Button } from '../../common/buttons';
import { Input } from '../../common/fields';

import './LoginPage.scss';

export const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });

  return (
    <div className='login-page'>
      <div className='login-page__container'>
        <div>header</div>
        <div className='login-page__form '>
          <Input
            type='text'
            isError
            helperText='error'
            placeholder='username'
            value={formValues.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
          />
          <Input
            type='password'
            isError={false}
            helperText='error'
            placeholder='password'
            value={formValues.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          <div>
            <Button>SignIn</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
