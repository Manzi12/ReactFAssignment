
import React, { Component, Fragment } from "react";
import {Navbar, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import SignOut from "../signout";
import './navigation.css'
import SignIn from '../signin';
import SignUp from "../signup"
import Search from '../search';
import Home from '../home';
import {Switch, Route} from "react-router-dom";
import * as ROUTES from '../../routes'


class Navigation extends Component {
  render() {
    if (this.props.authUser)
    {
      return (
        <Fragment>
        <Navbar bg="success" variant="primary" fixed="top">
              <Navbar.Brand >The Private Search</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink activeClassName="active" to={ROUTES.HOME}>Home</NavLink>
              </Nav>
              <Nav>
              <NavLink activeClassName="active" to={ROUTES.SEARCH}>Search</NavLink>
            </Nav>
            <Nav className="ml-auto">
              <SignOut />
            </Nav>
        </Navbar>

      <Switch>
        <Route exact path={ROUTES.HOME}><Home authUser={this.props.authUser} /></Route>
        <Route path={ROUTES.SIGNIN}><SignIn /></Route>
        <Route path={ROUTES.SIGNUP}><SignUp /></Route>
      </Switch>


    </Fragment>
      );
    }


    return (
      <Fragment>
          <Navbar bg="success" variant="primary" fixed="top">
                <Navbar.Brand>The Private Search</Navbar.Brand>
                <Nav className="mr-auto">
                  <NavLink to={ROUTES.HOME}>Home</NavLink>
                </Nav>


              <Nav className="ml-auto">
        
                <NavLink to="/signin">SignIn</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
              
              </Nav>
          </Navbar>

        <Switch>
          <Route exact path={ROUTES.HOME}><Home /></Route>
          <Route path={ROUTES.SIGNIN}><SignIn /></Route>
          <Route path={ROUTES.SIGNUP}><SignUp /></Route>
          <Route path ={ROUTES.SEARCH}><Search /></Route>
        </Switch>


      </Fragment>
    );         
  }
}
export default Navigation;