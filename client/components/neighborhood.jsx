import React from 'react';
import css from './neighborhood.module.css';
import styleable from 'react-styleable';

class Neighborhood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGettingAround: false,
      GettingAround:
      <div onClick={this.handleClickGetAround.bind(this)}>
        <a href=''>Read more about the neighborhood</a>
      </div>,
      showRules: false,
    }
  }

  handleClickGetAround(e) {
    e.preventDefault();
    if (this.state.showGettingAround) {
      this.setState ({
        showGettingAround: false,
        GettingAround:
        <div>
          <a href='' onClick={this.handleClickGetAround.bind(this)}>Read more about the neighborhood</a>
        </div>
      })
    } else {
        this.setState ({
          showGettingAround: true,
          GettingAround:
          <div>
            <h3>Getting around</h3>
            {this.props.data.location.gettingAround}
            <a href='' onClick={this.handleClickGetAround.bind(this)}>Hide</a>
          </div>
        })
    }
  }

  render() {
   return (
     <div className={this.props.css.root}>
       <h2 className={this.props.css.title}>The neighborhood</h2>
         <div className={this.props.css.location}>{`${this.props.data.name}'s place is located in ${this.props.data.city} ${this.props.data.state} United States.`}
         </div>
         <div className={this.props.css.body}>
         {this.props.data.location.body}
         </div>
         {this.state.GettingAround}
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

export default styleable(css)(Neighborhood);
