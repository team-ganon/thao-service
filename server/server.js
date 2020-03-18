const path = require('path')
const express = require('express')
const app = express()
const port = 3004
const mongoose = require('mongoose');
const { Host, Area } = require('./models/Schema.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/zip', function(req, res) {
  Area.find(req.query, (err, arr) => res.send(arr));
})
