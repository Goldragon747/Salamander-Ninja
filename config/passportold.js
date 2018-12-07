var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var keys = require('./keys');
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: keys.google.callbackURL
        },
        function(accessToken, refreshToken, profile, done) {
        var userData = {
            email: profile.emails[0].value,
            name: profile.displayName,
            token: accessToken
        };
        done(null, userData);
        }
    )
);