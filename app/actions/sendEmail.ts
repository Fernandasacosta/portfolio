'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const subject = formData.get('name') as string;
  const body = formData.get('message') as string;
  const toEmail = formData.get('email') as string;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject,
    text: `Pessoa: ${subject}\nEmail: ${toEmail}\nMensagem: ${body}`,
  };

  await transporter.sendMail(mailOptions);
}
