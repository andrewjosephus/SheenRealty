const nodemailer = require("nodemailer");
require("dotenv").config();

const auth = {
  auth: {
    api_key: "f9d534dfa8aba00553218a8da4c31920-3d0809fb-08496f09",
    domain: "sandbox3b4d39d4afbc47b79aaea4789f2d1c99.mailgun.org",
  },
};

// For mailgun
// const transporter = nodemailer.createTransport(mailGun(auth));

const transport = {
  //all of the configuration for making a site send an email.

  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    //if error happened code ends here
    console.error(error);
  } else {
    //this means success
    console.log("users ready to mail myself");
  }
});

const sendMail = (name, email, subject, text, cb) => {
  const mailOptions = {
    sender: name,
    from: email,
    to: "andrewlim2552@gmail.com",
    //adeline.chur@sheenrealty.com
    subject: "New message from your website",
    html: `
    <h2>From:</h2>
    ${email} 
<br/><br/>
<h2>Subject:</h2>
${subject} 
<br/><br/>
    <h2>Message:</h2> 

    ${text}`,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      res.send({
        success: false,
        message: "Something went wrong. Try again later",
      });
    } else {
      res.send({
        success: true,
        message: "Thanks for contacting us. We will get back to you shortly",
      });

      console.log("req.url");
      console.log(req.url);
    }
  });
};

// Exporting the sendmail
module.exports = sendMail;
