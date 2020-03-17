const { Host, Area } = require('./Schema.js');
const db = require('./index.js');
const faker = require('faker');
const zips = [];
const hosts = [];
const areas = [];

(function createHostsData() {
  for (let i = 0; i < 20; i++) {
    let host = {
      name: '',
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
    for (let j = 0; j < 5; j++) {
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
      prop.image = faker.random.image();
      prop.ratings = Math.random() * 5;
      prop.review = faker.random.number();
      prop.description = faker.lorem.words;
      prop.cost = faker.random.number() + '$/night';
      area.properties.push(prop);

      things.image = faker.random.image();
      things.thingsType = faker.lorem.word();
      things.description = faker.lorem.words();
      things.cost = faker.random.number() + '$/person';
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
