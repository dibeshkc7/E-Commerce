const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // 
  service:"gmail",
  // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  }
});

  async function sendMail(userEmail, subject) {

  const info = await transporter.sendMail({
    from: "dibeshkc7@gmail.com", // sender address
    to: "dibeshkc3@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

}

module.exports = sendMail;