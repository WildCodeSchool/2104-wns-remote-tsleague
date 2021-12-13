import nodemailer from 'nodemailer';

import * as templates from './templates';

type SendInput = {
  templateName: 'teacherRegister' | 'forgotPassword';
  mail: string;
  firstname?: string;
  lastname?: string;
  additionalParameters?: Object;
};

async function send({
  templateName,
  mail,
  firstname = '',
  lastname = '',
  additionalParameters = {},
}: SendInput): Promise<void> {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.laposte.net',
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { subject, html } = templates[templateName]({
    firstname,
    lastname,
    mail,
    ...additionalParameters,
  });

  const info = await transporter.sendMail({
    from: '"Pixelearn 🏫" <pixelearn@laposte.net>',
    to: mail,
    subject,
    html,
  });

  console.log('html:', html);

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

export default send;
