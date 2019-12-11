import React, { Component, Fragment } from 'react';
import {withFirebase} from '../Firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../routes';
import './signin.css';
import {Form,Button,Card} from 'react-bootstrap';


const initialState = {
    email: '',
    password: ''
};

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {...initialState};
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    onSubmit = event => {
        const {email,password} = this.state;

        this.props.firebase
        //.signInWithEmailAndPassword(email,password)
        .auth.signInWithEmailAndPassword(email, password)
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

        return <Fragment>
            <Card class="signinsection">
                <Card.Header>Sign in</Card.Header>
            <Card.Body className="background">
            <Form onSubmit = {this.onSubmit}>
                <Form.Group>
                 <Form.Label className="label">Email</Form.Label>
                 <Form.Control className="placeholder"
                name = "email"
                value={email}
                type = "text"
                placeholder = "Email Address"
                onChange = {this.onChange}>
                </Form.Control>
                </Form.Group>
                 
                <Form.Group>
                 <Form.Label className="label">Password</Form.Label>
                 <Form.Control className="placeholder"
                name = "password"
                value={password}
                type = "password"
                placeholder = "**********"
                onChange = {this.onChange}>
                </Form.Control>
                </Form.Group>

                <Button type="submit">Sign In</Button>

            </Form>
            </Card.Body>
            </Card>
            </Fragment>
        
    }
}

const LoginForm = withRouter(withFirebase(SignIn));
const LoginSite  = () => (
    <Fragment>
        <LoginForm />
    </Fragment>
)

export default LoginSite;
