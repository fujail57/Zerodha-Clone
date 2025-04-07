const passport = require("./auth");

const localAuthMiddleware = passport.authenticate("local", { session: false });
module.exports = localAuthMiddleware;
