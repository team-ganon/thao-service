import React from 'react';
import css from './properties.module.css';
import styleable from 'react-styleable';
import carouselSlider from '../carouselFunc.js';

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }

  componentDidMount() {
    carouselSlider(this.props.css.carousel, this.props.css.entry, 'prev', 'next', 7);
  }

  render() {
    return (
      <div className={this.props.css.root}>
        <h2>More homes you may like</h2>
        <div className={this.props.css.carousel}>
          {this.props.data.map(property => (
              <div className={this.props.css.entry}>
                <img src={property.image} width={280} height={280} mode='fit'></img>
                <div>{property.thingsType}</div>
                <div>{property.description}</div>
                <div>{property.cost}</div>
              </div>
          ))}
        </div>
        <button className='prev'>Previous</button>
        <button className='next'>Next</button>
      </div>
    )
  }
}

export default styleable(css)(ThingsToDo);