import React, { Component } from 'react';
import { SigninHeaderLabel, SigninSubheaderText, SubmitText, SignInWithGoogleText } from '../../assets/constant';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        })
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]:value });
    }

    render () {
       return (
        <div className='sign-in'>
        <h2> { SigninHeaderLabel } </h2>
        <p> { SigninSubheaderText } </p>
        <form onSubmit={this.handleSubmit}>
            <FormInput
                type='email'
                name='email'
                label='email'
                value={this.state.email}
                handleChange={this.handleChange}
                required
            />
            <FormInput
                type='password'
                name='password'
                label='password'
                value={this.state.password}
                handleChange={this.handleChange}
                required
            />
            <div className='buttons'>
                <CustomButton type="submit">
                    { SubmitText } 
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    { SignInWithGoogleText } 
                </CustomButton>
            </div>
        </form>
            
        </div>
       );
    }
}

export default SignIn;