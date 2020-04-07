import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import './login-and-register.styles.scss';

const LoginAndRegisterPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <div>Register </div>
    </div>
);

export default LoginAndRegisterPage;