import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import app from '../../config/firebase';
//import SignIn from '../signin';


// const SignUpPage = () => (
//     <div>
//         <h1>SignUp</h1>
//         <SignUpForm />
//     </div>
// );

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const { email,password} = event.target.elements;
        try {
            await app 
            .auth()
            .createUserWithEmailAndPassword(email.value,password.value);
            history.push("/");
        } catch (error){
            alert(error);
        }
    },[history]);


    
    


// const initialState = {
//     username:'',
//     email: '',
//     password: ''
// };

// class SignUpForm extends Component {
//     constructor(props){
//         super(props);
//         this.state = {...initialState};
//     }

//     onChange = event => {
//         this.setState({[event.target.name]: event.target.value})
//     };

//     onSubmit = event => {
//     event.preventDefault();
//     const { username, email, password } = this.state;

//     this.props.firebase
//       .signUpNewUserWithEmailAndPassword(email, password)
//       .then(authUser => {
//         this.setState({ ...initialState });
//         this.props.history.push("/searchResults");
//       })
//       .catch(error => console.log(error));
//   };



//     render(){
//         const {
//             username,
//             email,
//             password
//         } = this.state;

        return(
            <div>

                <h1>Sign up for the account</h1>
                <p>If you have no account please signup to use our private search</p>
                {/* <Link to="/SignIn"><p>Already have an account</p></Link> */}

            
            <form onSubmit = {handleSignUp}>
                <label>Username</label>
                <input name="username" type="username" placeholder="Full Name" />
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" />
                <label>Password</label>
                <input name="password" type="password" placeholder="Password" />
                {/* name = "username"
                value={username}
                onChange = {this.onChange}
                type = "text"
                placeholder = "Full Name"
                /> */}
                 {/* <input
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
                /> */}

                <button type="submit">Sign Up</button>

            </form>

            </div>
        );
        
    }

export default withRouter(SignUp);
//export default SignUpForm;