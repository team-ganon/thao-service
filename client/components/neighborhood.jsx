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
     <h1>I AM Neighborhood</h1>
   )

  }
}

export default Neighborhood;