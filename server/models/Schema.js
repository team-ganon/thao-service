const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./index.js');

const hostSchema = new Schema({
  name:  String,
  body:   String, // description
  interaction: String, //interaction with Guests
  superhost: String, //superhost? hardcode this.
  verified: String, // hard code 'Verified'
  dateJoined: String, // Joined in December 2013
  rules: {
    checkin: String, //10AM - 4PM Hard code
    checkout: String, //11AM
    body: String //all rules paragraph form
  },
  location: {
    zip: String,
    description: String, // Captain Cook Hawaii United States
    gettingAround: String // Rental car is advisable.
  }
});

const areaSchema = new Schema({
  zip: String,
  properties: [
    {
      propType: String, // entire apartment 1 bed, entire bungalow 2 beds, private room- 1 bed
      image: String,
      ratings: Number, // 4.65 star
      review: Number,
      description: String, // tagline Hale Koa Studio & 1 Bedroom Units!!, Cute Hale Sugar Shack 2, Ka awa Loa Plantation Guesthouse
      cost: String //85$ / night
    }
  ],
  thingsToDo: [
    {
      thingsType: String, // yoga, farm visit, surf, boat ride
      description: String, // short tag line
      cost: String //per person and what's included?
    }
  ]
});

const Host = mongoose.model('host', hostSchema);
const Area = mongoose.model('areas', areaSchema);
module.exports.Host = Host;
module.exports.Area = Area;