const passport = require('passport');

const middlewares = {};

middlewares.requireJWT = passport.authenticate('jwt', { session: false });

module.exports = middlewares;
