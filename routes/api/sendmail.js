const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/sendmail", (req, res) => {
  // Get the form data from the request body
  const { firstName, lastName, email, subject, concern } = req.body;

  // Set up the email data
  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: "example@gmail.com",
    subject,
    text: concern,
  };

  // Send the email
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass, // generated ethereal password
      },
    });

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send("Error sending email");
        } else {
          console.log("Email sent: %s", info.messageId);
          res.send("Email sent");
        }
      });})})