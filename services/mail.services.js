import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const config = {
  host: "smtp.mailgun.org",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_API_KEY,
  },
};

const transporter = nodemailer.createTransport(config);

export { transporter };
