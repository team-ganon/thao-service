import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app.jsx';
import API from '../config.js';
const axios = require('axios');
const appDom = document.querySelector('#app');
const config = API.GoogleAPI;
let areaData;
let hostData;

function imageSlideClick(className) {
  const el = document.querySelector('.' + className);
}


axios.get('/area', {
  params: {
    zip: '24601'
  }
})
.then(res => {
  areaData = res.data[0];
})
.catch(err => console.log(err))
.then(() => {
  axios.get('/host', {
    params: {
      zip: '24601'
    }
  })
  .then(res => {
    hostData = res.data[0];
  })
  .catch(err => console.log(err))
  .then(() => {
    ReactDOM.render(<App area={areaData} host={hostData} api={config}/>, appDom);
  })
})


