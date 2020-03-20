require('dotenv').config();
const Amadeus = require('amadeus');

const credentials = {
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET
};

const amadeus = new Amadeus({
  ...credentials,
  port: 3001,
  customAppId: process.env.CUSTOM_APP_ID,
  customAppVersion: process.env.CUSTOM_APP_VERSION
});
