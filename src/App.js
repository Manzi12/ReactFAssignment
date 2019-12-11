import React, { Component } from 'react';
import './App.css';
import {withFirebase} from '../src/components/Firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../src/components/navigation';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      authUser:null
    }
  };

  componentDidMount(){
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({authUser}) : this.setState({authUser : null});
    });
    console.log("The user is : " + this.state.authUser)
  }

componentWillUnmount(){
  this.listener();
}

  render() {
    return (
      <Router>
        <div><Navigation authUser={this.state.authUser}/></div>
      </Router>
     
    );
  }
}

export default withFirebase (App);
