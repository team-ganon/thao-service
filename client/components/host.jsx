import React from 'react';

class Host extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
   return (
     <h1>I AM HOST</h1>
   )

  }
}

export default Host;