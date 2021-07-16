const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jpr1003',
    pass: 'J9003646471p'
  }
});

let mailDetails = {
  from: 'jpr1003@gmail.com',
  to: 'jayaprakashssakthivel@gmail.com',
  subject: 'Test mail',
  text: 'Node.js testing mail for GeeksforGeeks',
  attachments: [
    {
      filename: 'IEHIER_SH_220421_124921',
      path: __dirname + '/Capture.png'
    }
  ]
};

mailTransporter.sendMail(mailDetails, function(err, data) {
  if (err) {
    console.log(err);
    console.log('Error Occurs');
  } else {
    console.log('Email sent successfully');
  }
});
 