import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../routes';
import {Button,Card,Form} from 'react-bootstrap';

const initialState = {
    firstname: '',
    lastname:'',
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
    const { firstname, lastname,email, password } = this.state;

    this.props.firebase 
     // .createUserWithEmailAndPassword(email, password)
      .auth.createUserWithEmailAndPassword(email,password)
      .then(authUser => {
        this.setState({ ...initialState });
        this.props.history.push(ROUTES.SEARCH);
      });
      event.preventDefault();
  };



    render(){
        const {
            firstname,
            lastname,
            email,
            password
        } = this.state;

        return <Fragment>
            <Card className="signoutsection">
                <Card.Header>Sign Up</Card.Header>
            <Card.Body>
            <Form onSubmit = {this.onSubmit}>
            <Form.Group>
                 <Form.Label>First Name</Form.Label>
                 <Form.Control
                name = "firstname"
                value={firstname}
                type = "text"
                placeholder = "First Name"
                onChange = {this.onChange}>
                </Form.Control>
                </Form.Group>

                <Form.Group>
                <Form.Label>Last Name</Form.Label>
                 <Form.Control
                name = "lastname"
                value={lastname}
                type = "text"
                placeholder = "Last Name"
                onChange = {this.onChange}>
                </Form.Control>
                </Form.Group>

                <Form.Group>
                 <Form.Label>Email</Form.Label>
                 <Form.Control
                name = "email"
                value={email}
                type = "text"
                placeholder = "Email Address"
                onChange = {this.onChange}>
                </Form.Control>
                </Form.Group>
                 
                <Form.Group>
                 <Form.Label>Password</Form.Label>
                 <Form.Control
                name = "password"
                value={password}
                type = "password"
                placeholder = "**********"
                onChange = {this.onChange}>
                </Form.Control>
                </Form.Group>

                <Button variant="success" type="submit">Sign Up</Button>

            </Form>
            </Card.Body>
            </Card>
            </Fragment>
        
    }
}

const Register = withRouter(withFirebase(SignUpForm));

const SignUpSite = () => (
    <Fragment>
        <Register />
    </Fragment>
)

export default SignUpSite;