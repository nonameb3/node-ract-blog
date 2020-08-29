const passport = require('passport');

const Card = require('../models/card');

const middlewares = {};

middlewares.requireJWT = passport.authenticate('jwt', { session: false });

middlewares.isCardOwner = function (req, res, next) {
  Card.findById(req.params.id, (err, card) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      if (card && req.user.id == card.author.id) {
        next();
      } else {
        res.status(402).json({ message: 'not owner or not value' });
      }
    }
  });
};

module.exports = middlewares;
