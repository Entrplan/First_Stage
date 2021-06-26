import * as nodemailer from 'nodemailer';
import Mail = require('nodemailer/lib/mailer');
import SMTPTransport = require('nodemailer/lib/smtp-transport');
import * as fs from 'fs';

export class EmailSender {
  constructor() {}

  async SendMail() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false,
      auth: {
        user: 'elias_dahi@hotmail.com', // generated mailtrap user
        pass: 'WMG5X7IpkE08tZNj', // generated mailtrap password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '<elias_dahi@hotmail.com>', // sender address
      to: 'elias.dahi28@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      // html: '<b>Hello world?</b>', // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log(
      'Preview URL: %s',
      nodemailer.getTestMessageUrl(info),
    );
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  // 3. Attachments

  message_attachments_test() {
    const message: Mail.Options = {
      attachments: [
        {
          // utf-8 string as an attachment
          filename: 'text1.txt',
          content: 'hello world!',
        },
        {
          // binary buffer as an attachment
          filename: 'text2.txt',
          content: new Buffer('hello world!', 'utf-8'),
        },
        {
          // file on disk as an attachment
          filename: 'text3.txt',
          path: '/path/to/file.txt', // stream this file
        },
        {
          // filename and content type is derived from path
          path: '/path/to/file.txt',
        },
        {
          // stream as an attachment
          filename: 'text4.txt',
          content: fs.createReadStream('file.txt'),
          contentTransferEncoding: 'quoted-printable',
        },
        {
          // define custom content type for the attachment
          filename: 'text.bin',
          content: 'hello world!',
          contentType: 'text/plain',
          contentTransferEncoding: '7bit',
          contentDisposition: 'attachment',
        },
        {
          // use URL as an attachment
          filename: 'license.txt',
          path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE',
        },
        {
          // encoded string as an attachment
          filename: 'text1.txt',
          content: 'aGVsbG8gd29ybGQh',
          encoding: 'base64',
          contentTransferEncoding: 'base64',
        },
        {
          // data uri as an attachment
          path: 'data:text/plain;base64,aGVsbG8gd29ybGQ=',
          contentDisposition: 'inline',
          contentTransferEncoding: false,
        },
        {
          // use pregenerated MIME node
          raw:
            'Content-Type: text/plain\r\n' + // tslint:disable-line prefer-template
            'Content-Disposition: attachment;\r\n' +
            '\r\n' +
            'Hello world!',
        },
      ],
    };
  }

  // 3. Embedded images

  message_embedded_images_test() {
    const message: Mail.Options = {
      html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
      attachments: [
        {
          filename: 'image.png',
          path: '/path/to/file',
          cid: 'unique@nodemailer.com', // same cid value as in the html img src
        },
      ],
    };
  }

  // Verify SMTP connection configuration

  smtp_verify_test() {
    const transporter = nodemailer.createTransport();
    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
  }
}
