import React, { Component, Fragment } from "react";
import { Col } from "react-bootstrap";
import './search.css'
import axios from 'axios';
import { Form,CardDeck,Card,Button} from "react-bootstrap";

const REACT_APP_API_KEY = "AxP4BGuBsV4xy1lNws9OIxvJ0ZpVxmXpu4yDz2lNmkXEAPNeIxO9uhPLKHudSmJpQ6HONbd8-iCqpUxvKSalQDbStWsIm1fMaQRlHJ7qWrymAsMQQ8qm7S1STRHBXXYx";

const initialState = {
  location:"",
  hotels:"",
  searchResults:[]
};



class Search extends Component {
  constructor(props){
    super(props);
        this.state = { ...initialState};
    }

    handleSearch = event => {
        event.preventDefault();
        const { location, hotels, searchResults} = this.state;
        this.searchHotelsOnYelp(location,hotels,searchResults);
    };

    handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = event => {
       event.preventDefault();
      const { location, hotels, searchResults} = this.state;
      this.searchHotelsOnYelp(location,hotels,searchResults);
    }


    searchHotelsOnYelp = (location,hotels,searchResults) => {
       axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}+IE&categories=${hotels}`,
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
    const { location, hotels, searchResults} = this.state;
  
    const hotelSearchResults = this.state.searchResults.map(hotel => {
      return (
        <div className="searchResults" key={hotel.id} >
          <CardDeck>
            <card>
              <Card.Img variant="top" src={hotel.image_url}/>
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
              </Card.Body>
              <Button href={hotel.url} variant="primary">View More Information</Button>
            </card>
          </CardDeck>
        </div>
      )
    }) 

    


    return(
      <Fragment>

        <div className="background">
          <div class="container">
          <h1>Google Hotels</h1>
          <div><p>Search for a hotel in a city of your choice</p></div>
        <div className="SearchHotelForm">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="location"
                  type="text"
                  value={location}
                  onChange={this.handleChange}
                  placeholder="location"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Hotels</Form.Label>
                <Form.Control
                  name="hotels"
                  type="text"
                  value={hotels}
                  onChange={this.handleChange}
                  placeholder="hotels"
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
    
  
    