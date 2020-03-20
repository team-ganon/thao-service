import React from 'react';

class Neighborhood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
   return (
     <div>
       <h2>The neighborhood</h2>
       <p>
         {`${this.props.data.name}'s place is located in ${this.props.data.city}.`} <br/>
         {this.props.data.location.body}
         <h3>Getting around</h3>
         {this.props.data.location.gettingAround}
       </p>
       <iframe
         src={`https://www.google.com/maps/embed/v1/place?key=${this.props.api}
         &q=${this.props.data.zip}`}>
       </iframe>
       <div>Exact location information is provided after a booking is confirmed.</div>
       <h2>Things to keep in mind</h2>
       <div>
         Check-in: {this.props.data.rules.checkin} <br/>
         Checkout: {this.props.data.rules.checkout}
       </div>
       <div>
         <h3>House Rules</h3>
         {this.props.data.rules.body}
       </div>
     </div>
   )
  }
}

export default Neighborhood;
