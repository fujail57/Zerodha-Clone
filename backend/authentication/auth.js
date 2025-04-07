const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const userDB = require("../model/usersModel");

// Authentications
passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      console.log("Recived credentiaals ", username, password);
      const User = await userDB.findOne({ username: username });
      if (!User) return done(null, false, { message: "Incorrect username" });
      // const isPasswordMatch = (await User.password) === password ? true : false;
      const isPasswordMatch = await User.comparePassword(password);
      if (isPasswordMatch) {
        return done(null, true);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
