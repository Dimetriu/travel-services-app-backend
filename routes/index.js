const express = require('express');
const { amadeus_api } = require('../amadeus_api');

const router = express.Router();

router.use('/', (req, res) => {
  res.json({ msg: 'Hello World' });
});

module.exports = router;