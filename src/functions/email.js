import { createRequire } from "module";
const require = createRequire(import.meta.url);
const nodemailer = require("nodemailer");
//const APP_PASSWORD = import.meta.env.VITE_APP_PASSWORD
//wfbm ftwq frmk gimd

const transporter = nodemailer.createTransport({
  service:'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user:  "info.devalbo@gmail.com",
    pass: 'wfbm ftwq frmk gimd',
  },
});

const mailOptions = {
  from: 'info.devalbo@gmail.com',
  to: 'info@devalbo.be',
  subject: 'Nieuwe offerte'
}


async function sendMail(transporter, mailOptions){
  try {
    await transporter.sendMail(mailOptions);
    console.log('succes');
  } catch (error) {
    console.log(error);
  }
}


sendMail(transporter, mailOptions)