import jwt from "jsonwebtoken";
import { User } from "#models/users.schema.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (!existingUser || !existingUser.validPassword(password)) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    {
      id: existingUser._id,
    },
    "secret"
  );
  return res.status(200).json({
    token,
    user: {
      email,
      subscription: "starter",
    },
  });
};

export { login };
