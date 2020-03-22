const Amadeus = require('amadeus');

const PORT = process.env.PORT || 5000;

const credentials = {
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET
};

const amadeus_api = new Amadeus({
  ...credentials,
  port: `${PORT}`,
  customAppId: process.env.CUSTOM_APP_ID,
  customAppVersion: process.env.CUSTOM_APP_VERSION
});

module.exports = {
  PORT,
  amadeus_api
};
