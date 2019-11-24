import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Home from './components/home';
import SignIn from './components/signin';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({user});
        //localStorage.setItem('user', user.uid);
      }else {
        this.setState({user: null});
        //localStorage.removeItem('user');
      }
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Our Private Search</h1>
          {this.state.user ? (<Home />) : (<SignIn />)}
        </header>
      </div>
    );
  }
}

export default App;
