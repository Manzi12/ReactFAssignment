import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from '../src/components/home';
import Search from '../src/components/search';
import ResultsList from '../src/components/resultsList';
import SignUpForm from '../src/components/signup';
import SignIn from '../src/components/signin';

const sample = {
    name:  " Bloggs" ,
    picture: { thumbnail: "./profile.png" }
  };

  const searchResults = [sample,sample];

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

storiesOf("resultsList/resultsList",module).add("default",() => (
    <ResultsList searchResults = {searchResults} />
));

