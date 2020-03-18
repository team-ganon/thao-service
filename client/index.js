import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app.jsx';
const axios = require('axios');

const appDom = document.querySelector('#app');

axios.get('/zip', {
  params: {
    zip: '26301-6161'
  }
})
.then(res => res.data[0])
.catch(function (error) {
  console.log(error);
})
.then(data => {
  ReactDOM.render(<App data={data}/>, appDom);
})

