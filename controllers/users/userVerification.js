import dotenv from "dotenv";

import { User } from "#models/users.schema.js";
import { transporter } from "#services/mail.services.js";

dotenv.config();

const verifyUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "missing required field" });
  }

  const verifiedUser = await User.findOne({ email, verify: false });
  if (!verifiedUser) {
    return res
      .status(400)
      .json({ message: "Verification has already been passed" });
  }

  if (verifiedUser) {
    const verificationToken = verifiedUser.verificationToken;
    const emailOptions = {
      from: process.env.MAILGUN_EMAIL,
      to: email,
      subject: "Verify your email",
      html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Click to verify</a>`,
    };

    const sendEmail = await transporter.sendMail(emailOptions);
  }
};

export { verifyUser };
