import React, { Component } from "react";
import search from "../search/";
//import './contactList.css';

export default class resultList extends Component {
  render() {
    const hotelCards = this.props.searchResults.map(hotel => (
      <search key={hotel.name} search={hotel} />
    ));
    return (
      <div className="container-fluid hotels bg-info">
        <div className="row">{hotelCards}</div>
      </div>
    );
  }
}