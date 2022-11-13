var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aaaaaaaa@gmail.com',
    pass: '*******'
  }
});

var mailOptions = {
  from: 'aaaaaaaaa@gmail.com',
  to: 'bbbbbbbb@@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});