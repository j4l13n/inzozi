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
      user: process.env.EMAIL || 'inzozitour@gmail.com', // generated ethereal user
      pass: process.env.PASSWORD || 'Inzozitour123!@#', // generated ethereal password
    },
  });

  const mailData = {
    from: testAccount.user,
    to: process.env.EMAIL || 'inzozitours20@gmail.com',
    subject: `Message From ${req.body.names} ${req.body.mobile}`,
    text: req.body.message,
    html: `
      <div style="">${req.body.email}</div>
      <div>${req.body.message}</div>
      <div>${req.body.names}</div>
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