const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;

const User = require('../models/user');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'SECRET_KEY_Ava22ix',
};

router.post('/login', passport.authenticate('local'), function (req, res) {
  const payload = { id: req.user._id };
  const token = jwt.sign(payload, jwtOptions.secretOrKey);
  res.json({ message: 'login', token: token });
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const _user = new User({ username: username });

  User.register(_user, password, (err, user) => {
    if (err) {
      console.log(err);
      return res.json({ error: err.message });
    } else {
      passport.authenticate('local')(req, res, () => {
        res.json({ message: 'Successfully created new account!' });
      });
    }
  });
});

router.get(
  '/secret',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    res.json({ message: 'Success!', user: req.user });
  }
);

module.exports = router;
