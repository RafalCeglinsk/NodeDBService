import passport from "passport";
import passportJwt from "passport-jwt";
import { User } from "#models/users.schema.js";

const strategy = new passportJwt.Strategy(
  {
    secretOrKey: "secret",
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  (payload, done) => {
    User.findOne({ _id: payload.id })
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(new Error("Token is invalid"));
      })
      .catch((err) => {
        return done(err);
      });
  }
);

passport.use(strategy);

export { strategy };
