import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route,Redirect,Switch} from "react-router-dom";
import Home from './components/home';
import Search from './components/search';
import SignIn from './components/signin';
import SignUp from './components/signup';
import { AuthProvider } from './AuthProvider';

class Router extends Component {


    render(){
        return(
            <AuthProvider>
        <BrowserRouter>
            <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/signin" exact component={SignIn}/>
            <Route path = "/signup" exact component={SignUp}/>
            <Route path = "/search" exact component={Search}/> 
            </Switch>
         </BrowserRouter>
         </AuthProvider>
        
        )
    }
}



ReactDOM.render(<Router />, document.getElementById('root'));
