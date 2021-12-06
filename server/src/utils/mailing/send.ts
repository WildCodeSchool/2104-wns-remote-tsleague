import nodemailer from 'nodemailer';

import * as templates from './templates';

type SendInput = {
  templateName: 'teacherRegister';
  mail: string;
  firstname?: string;
  name?: string;
};

async function send({
  templateName,
  mail,
  firstname = '',
  name = '',
}: SendInput): Promise<void> {
  console.log('env:', process.env.SMTP_USER);
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.laposte.net',
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { subject, html } = templates[templateName]({ firstname, name });

  const info = await transporter.sendMail({
    from: '"Pixelearn 🏫" <pixelearn@laposte.net>',
    to: mail,
    subject,
    html,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

export default send;
