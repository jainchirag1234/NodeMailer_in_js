const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "chiragjain7698@gmail.com",
    pass: "zkbvynztpcawdrio",
  },
});

function sendMail(to, sub, msg) {
  transporter.sendMail({
    to: to,
    subject: sub,
    html: msg,
  });
  console.log("Email Sent");
}
sendMail(
  "chiragjain7698@gmail.com",
  "Today is not holiday",
  "Today is a Monday",
);
