

import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'swetraj20042005@gmail.com',
    pass: 'lkaz gwkd cgst qrya'
  }
});


export default transporter;