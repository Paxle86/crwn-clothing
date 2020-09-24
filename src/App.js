import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUp from './pages/sign-in and sign-up/SignIn-SignUp';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubcribeFromAuth = null;
	componentDidMount() {
		this.unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}
	componentWillUnmount() {
		this.unsubcribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}
export default App;
