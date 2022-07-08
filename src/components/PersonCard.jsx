import React, { Component } from 'react';

class PersonCard extends React.Component {
   render() {
      return (
         <div className="person">
            <h1>{this.props.fullName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
         </div>
      )
   }
}

export default PersonCard;