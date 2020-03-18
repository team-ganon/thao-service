import React from 'react';

function ThingsEntry(props) {
  console.log(props.data);
  return (
    <div>
      <img src={props.data.image}></img>
      <p>
        <span>{props.data.thingsType}</span>
        <span>{props.data.description}</span>
        <span>{props.data.cost}</span>
      </p>
    </div>
  )
}

export default ThingsEntry;