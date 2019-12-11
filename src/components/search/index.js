import React, { Component, Fragment } from "react";
import { Col } from "react-bootstrap";
import './search.css'
//import buttons from "../config/buttonsConfig";
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

    // state = {
    //   status : "",
    //   name : this.props.search.name,
    //   previousDetails: {
    //     name : this.props.search.name
    //   }
    // };

    // handleEdit =() => this.setState({status:"Edit"});
    // handleCancel = () => {
    //   let name = this.state.previousDetails;
    //   this.setState({status : " ",name});
    // };

    // handleSave = e => {
    //   e.preventDefault();
    //   let updatedName = this.state.name.trim();
    //   if(! updatedName){
    //     return;
    //   }
    //   let name = this.state;
    //   this.setState({status:" ",previousDetails: name});
    // };

    // handleDelete = () => this.state({status : 'Del'});
    // handleConfirm = (e) => {
    //   e.preventDefault();
    //   this.props.deleteHandler(this.state.name);
    // };

    // handleNameChange = e => this.setState({name : e.target.value});


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
    // let activeButtons = buttons.normal;
    // let leftButtonHandler = this.handleEdit;
    // let rightButtonHandler = this.handleDelete;
    // let cardColor = "bg-white";

    // if(this.state.status === "Edit"){
    //   cardColor = "bg-primary";
    //   activeButtons = buttons.edit;
    //   leftButtonHandler = this.handleSave;
    //   rightButtonHandler= this.handleCancel;
    // }else if (this.state.status === 'Del'){
    //   cardColor = "bg-warning";
    //   activeButtons = buttons.delete;
    //   leftButtonHandler = this.handleCancel;
    //   rightButtonHandler = this.handleConfirm;
    // }
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
      //   <div className="card-footer">
      //   <div
      //     className="btn-group d-flex btn-group-justified" role="group" aria-label="..." >
      //     <button
      //       type="button"
      //       className={"btn w-100 " + activeButtons.leftButtonColor}
      //       onClick={leftButtonHandler}>{activeButtons.leftButtonVal}</button>
      //     <button type="button"
      //       className={"btn w-100 " + activeButtons.rightButtonColor}
      //       onClick={rightButtonHandler}>{activeButtons.rightButtonVal}</button>
      //   </div>
      // </div>
      // </div>
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
    
  
    