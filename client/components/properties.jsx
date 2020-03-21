import React from 'react';
import PropertyEntry from './propertyEntry.jsx';
import css from './properties.module.css';
import styleable from 'react-styleable';

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
    return (
      <div className={this.props.css.wrapper}>
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

export default styleable(css)(ThingsToDo);