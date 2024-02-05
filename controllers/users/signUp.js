import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

import { User } from "#models/users.schema.js";
import { transporter } from "../../services/mail.services.js";

dotenv.config();

const signUp = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "Invalid email or password" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();
  const user = new User({ email, password: hashedPassword, verificationToken });
  await user.save();

  const emailOptions = {
    from: process.env.MAILGUN_EMAIL,
    to: email,
    subject: "Verify your email",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Click to verify</a>`,
  };

  const sendEmail = await transporter.sendMail(emailOptions);

  return res.status(200).json({
    user: {
      email,
      subscription: "starter",
    },
  });
};

export { signUp };
