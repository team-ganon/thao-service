import React from 'react';

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
   return (
     <h1>I AM ThingsToDo</h1>
   )

  }
}

export default ThingsToDo;