import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app.jsx';
const axios = require('axios');

import API from './config.js';
const appDom = document.querySelector('#app');
const config = API.GoogleAPI;
let areaData;
let hostData;


axios.get('/area', {
  params: {
    zip: '15080'
  }
})
.then(res => {
  areaData = res.data[0];
})
.catch(err => console.log(err))
.then(() => {
  axios.get('/host', {
    params: {
      zip: '15080'
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


