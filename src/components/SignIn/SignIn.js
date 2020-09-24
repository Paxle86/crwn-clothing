import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};
	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						required
						handeChange={this.handleChange}
						label='email'
					/>

					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						required
						handeChange={this.handleChange}
						label='password'
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
