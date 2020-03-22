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
      <div>
        <h2>Things to do near this home</h2>
        <div>
          {this.props.data.map(thing => (
            <div>
            <img src={thing.image}></img>
            <div>{thing.thingsType}</div>
            <div>{thing.description}</div>
            <div>{thing.cost}</div>
          </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ThingsToDo;