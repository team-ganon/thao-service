import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app.jsx';
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/zip', {
  params: {
    zip: '72868'
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});


const appDom = document.querySelector('#app');
ReactDOM.render(<App/>, appDom);
