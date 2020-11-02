import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';

import User from '../models/userModel.js';

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(_id, (err, user) => {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACKURL,
},
((accessToken, refreshToken, profile, done) => {
  User.findOrCreate({
    username: profile.displayName,
    email: profile._json.email,
    googleId: profile.id,
  },
  (err, user) => {
    done(err, user);
  });
})));
