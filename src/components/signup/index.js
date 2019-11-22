import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// const SignUpPage = () => (
//     <div>
//         <h1>SignUp</h1>
//         <SignUpForm />
//     </div>
// );

const initialState = {
    username:'',
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

    }



    render(){
        const {
            username,
            email,
            password
        } = this.state;

        return(
            <div>
                <h1>Sign up for the account</h1>
                <p>If you have no account please signup to use our private search</p>

            
            <form onSubmit = {this.onSubmit}>
                <input
                name = "username"
                value={username}
                onChange = {this.onChange}
                type = "text"
                placeholder = "Full Name"
                />
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
                />

                <button type="submit">Sign Up</button>

            </form>

            </div>
        );
        
    }
}

export default SignUpForm;