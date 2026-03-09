import dotenv from "dotenv";
dotenv.config({ path: "./Server/.env" });

import nodemailer from "nodemailer";

console.log("EMAIL:", process.env.SMTP_USER);
console.log("PASS:", process.env.SMTP_PASS);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export default transporter;