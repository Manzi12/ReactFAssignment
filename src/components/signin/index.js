import React, { Component, Fragment } from 'react';
import {withFirebase} from '../../config/firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../routes';


const initialState = {
    email: '',
    password: ''
};

class SignIn extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {...initialState};
    }


    // login(e){
    //     e.preventDefault();
    //     firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) =>{
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    onSubmit = event => {
        const {email,password} = this.state;

        this.props.firebase
        .doSignInWithEmailAndPassword(email,password)
        .then( () => {
            this.setState({...initialState});
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

const LoginForm = withRouter(withFirebase(SignIn));
const LoginSite  = () => (
    <Fragment>
        <LoginForm />
    </Fragment>
)

export default LoginSite;
