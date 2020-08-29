const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
const config = require('./config');

const AuthRoute = require('./routes/auth');
const CardRoute = require('./routes/card');

// MongoDB Config
const mongodbURL = config.DB_URL;
mongoose.connect(mongodbURL, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// App Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
require('./servers/passport');

// route
app.use('/api/auth', AuthRoute);
app.use('/api/card', CardRoute);

app.get('*', (req, res) => {
  res.status(404).json({ message: 'not found' });
});

// start server
const port = process.env.PORT || 9000;
app.listen(port, process.env.IP, () => {
  console.log('Server has start at: ' + port);
});
