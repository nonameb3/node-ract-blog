const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
const config = require('./config');

// MongoDB Config
const mongodbURL = config.DB_URL;
mongoose.connect(mongodbURL, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// App Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route
app.get('*', (req, res) => {
  res.status(404).json({ message: 'not found' });
});

// start server
const port = process.env.PORT || 9000;
app.listen(port, process.env.IP, () => {
  console.log('Server has start at: ' + port);
});
