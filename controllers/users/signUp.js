import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "#models/users.schema.js";

const signUp = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "Invalid email or password" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ email, password: hashedPassword });
  await user.save();

  return res.status(200).json({ message: "User successfully registered" });
};

export { signUp };
