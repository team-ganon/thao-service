import React from 'react';
import styleable from 'react-styleable';
import css from './propertyEntry.module.css';

function PropertyEntry(props) {
  return (
    <div className={props.css.entry}>
      <img src={props.data.image} width={280} height={280} mode='fit'></img>
      <div>{props.data.thingsType}</div>
      <div>{props.data.description}</div>
      <div>{props.data.cost}</div>
    </div>
  )
}

export default styleable(css)(PropertyEntry);