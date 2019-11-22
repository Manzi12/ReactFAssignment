import React, { Component } from 'react';
import fire from '../../config/fire';

class Home extends Component{
    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
            <div className="col-md-6">
                <h1>YOU ARE HOME SAFE</h1>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}

export default Home;