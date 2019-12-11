import React, { Component,Fragment } from 'react';
import {Jumbotron} from 'react-bootstrap';


class Home extends Component{
    render(){
        if(this.props.authUser){
            return <Fragment>
                <Jumbotron>
                <h1>Welcome back {this.authUser} to the search</h1>
                <p>hope you find what you want from our site</p>
                </Jumbotron>
            </Fragment>
        }



        return <Fragment>
            <Jumbotron>
            <h1>Welcome to the private search</h1>
                <p>please signup and login to use the search</p>
            </Jumbotron>
        </Fragment>
    }

}

export default Home;