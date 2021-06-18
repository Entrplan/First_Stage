const nodemailer = require('nodemailer');

export default class EmailSender {
  constructor() {}

  MailSender() {
    let transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'elias.dahi28@gmail.com',
        pass: 'H@noona561988',
      },
    });

    const message = {
      from: 'elias.dahi28@gmail.com', // Sender address
      to: 'elias_dahi@hotmail.com', // List of recipients
      subject: 'Design Your Model S | Tesla', // Subject line
      text: 'Have the most fun you can in a car. Get your Tesla today!', // Plain text body
    };
    transport.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
}
