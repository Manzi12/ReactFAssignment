import React, { Component, Fragment } from "react";
import { Col } from "react-bootstrap";
import './search.css'
import axios from 'axios';
import { Form,CardDeck,Card,Button} from "react-bootstrap";

const REACT_APP_API_KEY = "AxP4BGuBsV4xy1lNws9OIxvJ0ZpVxmXpu4yDz2lNmkXEAPNeIxO9uhPLKHudSmJpQ6HONbd8-iCqpUxvKSalQDbStWsIm1fMaQRlHJ7qWrymAsMQQ8qm7S1STRHBXXYx";

const initialState = {
  location:"",
  search:"",
  searchResults:[]
};



class Search extends Component {
  constructor(props){
    super(props);
        this.state = { ...initialState};
    }

    handleSearch = event => {
        event.preventDefault();
        const { location, search, searchResults} = this.state;
        this.searchHotelsOnYelp(location,search,searchResults);
    };

    handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = event => {
       event.preventDefault();
      const { location, search, searchResults} = this.state;
      this.searchHotelsOnYelp(location,search,searchResults);
    }


    searchHotelsOnYelp = (location,search,searchResults) => {
       axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}+IE&categories=${search}`,
       {
           headers: {
        //Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        Authorization: `Bearer ${REACT_APP_API_KEY}`
    }
  
  }

)

    .then(response => this.setState ({searchResults:response.data.businesses}));
    console.log(searchResults)
}

  
  
  render() {
    const { location, search, searchResults} = this.state;
  
    const hotelSearchResults = this.state.searchResults.map(search => {
      return (
        <div className="searchResults" key={search.id} >
          <CardDeck>
            <card>
              <Card.Img variant="top" src={search.image_url} height="100" width="100"/>
              <Card.Body className="image-name">
                <Card.Title>{search.name}</Card.Title>
                <Button href={search.url} variant="primary">View More Information</Button>
              </Card.Body>
            </card>
          </CardDeck>
        </div>
      )
    }) 

    


    return(
      <Fragment>

        <div className="background">
          <div class="container">
          <h1>Google private Search</h1>
          <p>Search for a Anything in a city of your choice</p>
        <div className="SearchHotelForm">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="label">City</Form.Label>
                <Form.Control className="placeholder"
                  name="location"
                  type="text"
                  value={location}
                  onChange={this.handleChange}
                  placeholder="london,dublin,waterford,washington,cork,califonia,galway,berlin"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="label">Search Categories</Form.Label>
                <Form.Control className="placeholder"
                  name="search"
                  type="text"
                  value={search}
                  onChange={this.handleChange}
                  placeholder="hotels,amusements,beaches,gyms,yoga,swimming,Arcades,Festivals,Education,Soccer"
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit</Button>
           
          </Form>
        </div>

       
        {hotelSearchResults}
        
        </div>
        </div>
      </Fragment>

    )
    
    }

}
export default Search;
    
  
    