import React, { Component } from "react";
import './search.css'
import axios from 'axios';


class Search extends Component {
  state = {};
  
  render() {
    const locationSearched = 'Waterford';
    const REACT_APP_API_KEY = 'AxP4BGuBsV4xy1lNws9OIxvJ0ZpVxmXpu4yDz2lNmkXEAPNeIxO9uhPLKHudSmJpQ6HONbd8-iCqpUxvKSalQDbStWsIm1fMaQRlHJ7qWrymAsMQQ8qm7S1STRHBXXYx';

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
  headers: {
    //Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    Authorization: `Bearer ${REACT_APP_API_KEY}`
},
  params: {
  categories: 'breakfast_brunch',
}
})
.then((res) => {
console.log(res)
})
.catch((err) => {
console.log ('error')
})

    return(
      <div>
        <h1>Welcome to another version of google</h1>
        <input name="text" type="text" placeholder="Search"></input>
      </div> 

    )

    }
}
export default Search;
    
  
    