require("dotenv").config();
var keys = require('./keys');
module.exports = {
  facebookAuth: {
    appID: keys.facebook.clientID,
    appSecret: keys.facebook.clientSecret,
    callbackURL: "http://localhost:3001/auth/facebook/callback"
  },
  googleAuth: {
    appID: keys.google.clientID,
    appSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:3001/auth/google/callback"
  }
};
