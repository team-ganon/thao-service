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
      <div>
        <h2>More homes you may like</h2>
        <div className={this.props.css.carousel}>
          {this.props.data.map(property => (
            <PropertyEntry data={property}/>
          ))}
        </div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    )
  }
}

export default styleable(css)(ThingsToDo);