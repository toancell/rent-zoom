const nodemailer = require("nodemailer");



// async..await is not allowed in global scope, must use a wrapper
async function sendMail(user,html) {

    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "toancell6789@gmail.com",
          pass: process.env.KEY_MAIL,
        },
      });
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'Nha tro', // sender address
    to: user, // list of receivers
    subject: "Cap lai mat khau moi", // Subject line
     // plain text body
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


module.exports = sendMail;