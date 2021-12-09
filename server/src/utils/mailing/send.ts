import nodemailer from 'nodemailer';
import { InputForgotPasswordTemplate } from './templates/forgot-password';
import { InputTeacherRegisterTemplate } from './templates/teacher-register';
import { InputStudentRegisterTemplate } from './templates/student-register';

import * as templates from './templates';

type SendInput = {
  templateName: 'teacherRegister' | 'studentRegister' | 'forgotPassword';
  data:
    | InputTeacherRegisterTemplate
    | InputStudentRegisterTemplate
    | InputForgotPasswordTemplate;
};

async function send({ templateName, data }: SendInput): Promise<void> {
  const { mail } = data;
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.laposte.net',
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { subject, html } = templates[templateName](data);

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
