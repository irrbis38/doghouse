import React from 'react';

import { Button } from '../../common/buttons';
import { Input } from '../../common/fields';

import style from './LoginPage.module.scss';

export const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });

  return (
    <div className={style.login}>
      <div className={style.login__container}>
        <header className={style.login__header}>DogHouse</header>
        <div className={style.login__form}>
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
            isError
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
        <div className={style.login__signup}>
          <a href='##'>Create new account</a>
        </div>
      </div>
    </div>
  );
};
