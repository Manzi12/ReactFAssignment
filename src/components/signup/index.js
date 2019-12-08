import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {withFirebase} from '../../config/firebase';
import * as ROUTES from '../../routes';

const initialState = {
    email: '',
    password: ''
};

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {...initialState};
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...initialState });
        this.props.history.push(ROUTES.SEARCH);
      });
      event.preventDefault();
  };



    render(){
        const {
            email,
            password
        } = this.state;

        return(
            <div>
            <form onSubmit = {this.onSubmit}>
                 <input
                name = "email"
                value={email}
                onChange = {this.onChange}
                type = "text"
                placeholder = "Email Address"
                />
                 <input
                name = "password"
                value={password}
                onChange = {this.onChange}
                type = "password"
                placeholder = "Password"
                /> }

                <button type="submit">Sign Up</button>

            </form>
            </div>
        );
        
    };
};

const SignUp = withRouter(withFirebase(SignUpForm));

const SignUpSite = () => (
    <Fragment>
        <SignUp />
    </Fragment>
)

export default SignUpSite;