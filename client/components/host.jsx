import React from 'react';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import StarIcon from '@material-ui/icons/Star';

class Host extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
    const data = this.props.data;
    return (
      <div>
        <div>
          <h2>Hosted by {data.name}</h2>
          <p>
            {data.city}, {data.state} · Joined in {data.monthJoined} {data.yearJoined} <br/>
            <StarIcon/> {data.review} Reviews <VerifiedUserIcon/> {data.verified}
          </p>
          <img src={data.image}></img>
        </div>
        <p>
          {data.name} is a Superhost · Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
        </p>
        <p>
          {data.body}
          <h3> Interaction with guests</h3>
          {data.interaction} <br/>
          Languages: English <br/>
          Response rate: 100% <br/>
          Response time: within an hour <br/>
          <button>Contact host</button> <br/>
          <span>Always communicate through Airbnb </span> · To protect your payment, never transfer money or communicate outside of the Airbnb website or app. <a href=''>Learn more</a>
        </p>
     </div>
    )
  }
}

export default Host;