import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

class SignUpForm extends Component {
    constructor(props){
        super(props);
    }

    onSubmit = event => {

    }

    render(){
        return(
            <form onSubmit = {this.onSubmit}>

            </form>
        );
        
    }
}

export default SignUpForm;