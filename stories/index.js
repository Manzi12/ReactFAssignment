import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Search from '../src/components/search';

storiesOf("Search/Search",module).add("default",()=>(
    <Search/>
));
