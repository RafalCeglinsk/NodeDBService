import passport from "passport";

import { strategy } from "./auth.strategy.js";

const auth = (req, res, next) => {
  passport.authenticate(strategy, { session: false }, (error, user) => {
    if (error || !user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    req.user = user;
    next();
  })(req, res, next);
};

export { auth };
