import React from 'react';

function ThingsEntry(props) {
<<<<<<< HEAD
  console.log(props.data);
  return (
    <div>
      <img src={props.data.image}></img>
      <p>
        <span>{props.data.thingsType}</span>
        <span>{props.data.description}</span>
        <span>{props.data.cost}</span>
      </p>
=======
  return (
    <div>
      <img src={props.data.image}></img>
      <div>{props.data.thingsType}</div>
      <div>{props.data.description}</div>
      <div>{props.data.cost}</div>
>>>>>>> 81e50da3d891021dc7fc01d088ef07f06041fa96
    </div>
  )
}

export default ThingsEntry;