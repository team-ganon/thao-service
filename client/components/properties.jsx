import React from 'react';
import PropertyEntry from './propertyEntry.jsx'

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
    return (
      <div>
        <h2>More homes you may like</h2>
        <div>
          {this.props.data.map(property => (
            <PropertyEntry data={property}/>
          ))}
        </div>
      </div>
    )
  }
}

export default ThingsToDo;