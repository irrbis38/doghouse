import React from 'react';

import { Button } from '../../common/buttons';

import './LoginPage.css';

export const LoginPage = () => (
  <div className='login-page'>
    <div className='login-page__container'>
      <div>header</div>
      <div className='login-page__form '>
        <div>
          <input type='text' />
          <span>validation</span>
        </div>
        <div>
          <input type='text' />
          <span>validation</span>
        </div>
        <div>
          <Button>SignIn</Button>
        </div>
      </div>
    </div>
  </div>
);
