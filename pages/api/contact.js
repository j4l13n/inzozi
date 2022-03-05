/* eslint-disable import/no-anonymous-default-export */
var nodemailer = require('nodemailer')

export default async function (req, res) {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // 587,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'inzozitours20@gmail.com', // generated ethereal user
      pass: 'Inzozitours@123!', // generated ethereal password
    },
  });

  const mailData = {
    from: 'galualexnew@gmail.com',
    to: 'inzozitours20@gmail.com',
    subject: `Message From ${req.body.names}`,
    text: req.body.message,
    html: `
      <div>Dear ${req.body.names} has sent a message saying:</div><br />
      <div>Message: ${req.body.message}</div><br />
      <div>Names: ${req.body.names}</div>
      <div>Email: ${req.body.email}</div>
      <div>Mobile: ${req.body.mobile}</div>
    `
  }

  await transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log('>>>error',err)
    else
      console.log('...',info)
  })

  res.status(200).json()
}