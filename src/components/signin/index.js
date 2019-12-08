import React, { useCallback, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import app from '../../config/firebase';
import { AuthContext } from '../../AuthProvider';
import { Redirect } from '@reach/router';
//import SignIn from '../signin';


// const SignUpPage = () => (
//     <div>
//         <h1>SignUp</h1>
//         <SignUpForm />
//     </div>
// );

const SignIn = ({history}) => {
    const handleSignIn = useCallback(async event =>{
        event.preventDefault();
        const { email,password} = event.target.elements;
        try {
            await app 
            .auth()
            .signInWithEmailAndPassword(email.value,password.value);
            history.push("/");
        } catch (error){
            alert(error);
        }
    },[history]);

    const { currentUser } = useContext(AuthContext);
    if (currentUser){
        return <Redirect to="/"/>;
    }


    
    


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

                <h1>Sign in</h1>
                <p>If you have no account please signup to use our private search</p>
                {/* <Link to="/SignIn"><p>Already have an account</p></Link> */}

            
            <form onSubmit = {handleSignIn}>
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

                <button type="submit">Sign In</button>

            </form>

            </div>
        );
        
    }

export default withRouter(SignIn);
//export default SignUpForm;



// import React, { Component } from 'react';
// import fire from '../../config/fire';
// //import { withRouter } from 'react-router-dom';
// //import { Link} from 'react-router-dom';


// const initialState = {
//     email: '',
//     password: ''
// };

// class SignIn extends Component {
//     constructor(props){
//         super(props);
//         this.login = this.login.bind(this);
//         this.onChange = this.onChange.bind(this);
//         this.state = {...initialState};
//     }


//     login(e){
//         e.preventDefault();
//         fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) =>{
//         }).catch((error) => {
//             console.log(error);
//         });
//     }

//     onChange = event => {
//         this.setState({[event.target.name]: event.target.value})
//     };

//     onSubmit = event => {

//     }



//     render(){
//         const {
//             email,
//             password
//         } = this.state;

//         return(
//             <div>
//                 <h1>Sign in</h1>
//                 <p>enjoy our private search</p>

            
//             <form onSubmit = {this.onSubmit}>
//                  <input
//                 name = "email"
//                 value={email}
//                 onChange = {this.onChange}
//                 type = "text"
//                 placeholder = "Email Address"
//                 />
//                  <input
//                 name = "password"
//                 value={password}
//                 onChange = {this.onChange}
//                 type = "password"
//                 placeholder = "Password"
//                 />

//                 <button type="submit">Sign In</button>

//             </form>

//             </div>
//         );
        
//     }
// }

// export default SignIn;
