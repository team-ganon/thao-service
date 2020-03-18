import React from 'react';

function ThingsEntry(props) {
  return (
    <div>
      <img src={props.data.image}></img>
        <div>{props.data.thingsType}</div>
        <div>{props.data.description}</div>
        <div>{props.data.cost}</div>
    </div>
  )
}

export default ThingsEntry;