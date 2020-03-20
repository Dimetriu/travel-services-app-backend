require('dotenv').config();
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: process.env.API_KEY,
  clientSecret: process.env.API_SECRET
});
