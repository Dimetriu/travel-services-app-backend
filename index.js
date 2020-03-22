require('dotenv').config();
const express = require('express');
const router = require('./routes');
const { PORT } = require('./amadeus_api');

const app = express();
app.use(router);

app.listen(PORT);
