import React from 'react';
import { Route , Switch } from "react-router-dom";
import SignUp from '../signup';
import SignIn from '../signin';
import Search from '../search';
import Home from '../';

export default function routes(){
    return(
        <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/signin" exact component={SignIn}/>
            <Route path = "/signup" exact component={SignUp}/>
            <Route path = "/search" exact component={Search}/>
        </Switch>
    );
}