import React, { Component } from "react";
import axios from 'axios';


class search extends Component {
    
    render(){
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
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
        return{

        }
    }
}

export default search;
    