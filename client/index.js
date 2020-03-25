/* eslint-disable func-style */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import API from '../config.js';
const axios = require('axios');
const appDom = document.querySelector('#thao');
const config = API.GoogleAPI;
let areaData;
let hostData;
let zipCode;

function imageSlideClick(className) {
  const el = document.querySelector('.' + className);
}

axios.get('http://18.212.178.205:3004/area')
  .then(res => {
    let randomZip = Math.floor(Math.random() * 10);
    zipCode = res[randomZip];
    return zipCode;
  })
  .then(zipCode => {
    axios.get('http://18.212.178.205:3004/area', {
      params: {
        zip: zipCode
      }
    })
  })
  .then(res => {
    areaData = res.data[0];
  })
  .catch(err => console.log(err))
  .then(() => {
    axios.get('http://18.212.178.205:3004/host', {
      params: {
        zip: zipCode
      }
    })
      .then(res => {
        hostData = res.data[0];
      })
      .catch(err => console.log(err))
      .then(() => {
        ReactDOM.render(<App area={areaData} host={hostData} api={config}/>, appDom);
      });
  });