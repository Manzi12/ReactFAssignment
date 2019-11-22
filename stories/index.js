import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Search from '../src/components/search';
import SignUpForm from '../src/components/signup';
import SignIn from '../src/components/signin';

storiesOf("Search/Search",module).add("default",()=>(
    <Search/>
));

storiesOf("SignUp/SignUp",module).add("default",() => (
    <SignUpForm />
));

storiesOf("SignIn/SignIn",module).add("default",() => (
    <SignIn />
));

