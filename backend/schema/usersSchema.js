const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// hash algorithm
userSchema.pre("save", async function (next) {
  const User = this;
  if (!User.isModified("password")) return next();
  try {
    // generate salt
    const salt = await bcrypt.genSalt(10);
    // hash password
    const hashPassword = await bcrypt.hash(User.password, salt);
    // override password with hashed one
    User.password = hashPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    //comapre password
    const isMatchPassword = await bcrypt.compare(
      candidatePassword,
      this.password
    );
    return isMatchPassword;
  } catch (error) {
    throw error;
  }
};

module.exports = userSchema;
