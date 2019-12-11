import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from '../src/components/home';
import Search from '../src/components/search';
import SignUpForm from '../src/components/signup';
import SignIn from '../src/components/signin';
import Navigation from '../src/components/navigation';


storiesOf("Home/Home",module).add("default",() => (
<Home />
));

storiesOf("Search/Search",module).add("default",()=>(
    <Search/>
));

storiesOf("SignUp/SignUp",module).add("default",() => (
    <SignUpForm />
));

storiesOf("SignIn/SignIn",module).add("default",() => (
    <SignIn />
));

storiesOf("Navigation/Topbar",module).add("default",() => (
    <Navigation />
));
