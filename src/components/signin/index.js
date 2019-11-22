import React, { Component } from 'react';
import fire from '../../config/fire';
//import { withRouter } from 'react-router-dom';
//import { Link} from 'react-router-dom';


const initialState = {
    email: '',
    password: ''
};

class SignIn extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {...initialState};
    }


    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) =>{
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    onSubmit = event => {

    }



    render(){
        const {
            email,
            password
        } = this.state;

        return(
            <div>
                <h1>Sign in</h1>
                <p>enjoy our private search</p>

            
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
                />

                <button type="submit">Sign In</button>

            </form>

            </div>
        );
        
    }
}

export default SignIn;
