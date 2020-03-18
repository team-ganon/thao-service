const { Host, Area } = require('./Schema.js');
const db = require('./index.js');
const faker = require('faker');

const zips = [];
const hosts = [];
const areas = [];
const propertyImages = [];
const thingsImages = [];
const hostImages = [];

(function getPropertyImages() {
  for (let i = 1; i < 120; i++) {
    let url = `https://fechrr.s3.amazonaws.com/properties/properties+(${i}).jpg`;
    propertyImages.push(url);
  }
})();

(function getThingsImages() {
  for (let i = 1; i < 105; i++) {
    let url = `https://fechrr.s3.amazonaws.com/things/things+(${i}).jpg`;
    thingsImages.push(url);
  }
})();

(function getHostImages() {
  for (let i = 1; i < 44; i++) {
    let url = `https://fechrr.s3.amazonaws.com/host/host+(${i}).jpg`;
    hostImages.push(url);
  }
})();

(function createHostsData() {
  for (let i = 0; i < 10; i++) {
    let host = {
      name: '',
      image: '',
      body: '',
      interaction: '',
      superhost: 'Superhost',
      verified: 'Verified',
      dateJoined: '',
      rules: {
        checkin: '10AM - 4PM',
        checkout: '11AM',
        body: '',
      },
      location: {
        zip: '',
        description: '',
        gettingAround: 'Rental car is advisable.'
      }
    };
    host.name = faker.name.findName();
    host.image = hostImages[Math.floor(Math.random() * 44)];
    host.body = faker.lorem.paragraphs();
    host.interaction = faker.lorem.paragraph();
    host.dateJoined = faker.date.past();
    host.rules.body = faker.lorem.paragraph();
    let zip = faker.address.zipCode();
    zips.push(zip);
    host.location.zip = zip;
    host.location.description = faker.address.city();
    hosts.push(host);
  }
})();

(function createAreasData() {
  for (let i = 0; i < zips.length; i++) {
    let area = {
      zip: '',
    properties: [],
    thingsToDo: []
    };
    area.zip = zips[i];
    area.properties = [];
    area.thingsToDo = [];
    for (let j = 0; j < 10; j++) {
      let prop = {
        propType: '',
        image: '',
        ratings: '',
        review: '',
        description: '',
        cost: ''
      };
      let things = {
        image: '',
        thingsType: '',
        description: '',
        cost: ''
      };
      prop.propType = faker.lorem.words();
      prop.image = propertyImages[Math.floor(Math.random() * 119)];
      prop.ratings = Math.random() * 5;
      prop.review = Math.floor(Math.random() * 500);
      prop.description = faker.lorem.words();
      prop.cost = Math.floor(Math.random() * 250) + '$/night';
      area.properties.push(prop);

      things.image = thingsImages[Math.floor(Math.random() * 105)];
      things.thingsType = faker.lorem.word();
      things.description = faker.lorem.words();
      things.cost = Math.floor(Math.random() * 150) + '$/person';
      area.thingsToDo.push(things);
    }
    areas.push(area);
  }
})();

Host.create(hosts, (err, docs) => {
  if (err) {
    console.log(err);
  }
});

Area.create(areas, (err, docs) => {
  if (err) {
    console.log(err);
  }
});
