import React from 'react';
import ThingsEntry from './thingsEntry.jsx'

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
        <h2>Things to do near this home</h2>
        <div>
          {this.props.data.map(thing => (
            <ThingsEntry data={thing}/>
          ))}
        </div>
      </div>
    );
  }
}

export default ThingsToDo;