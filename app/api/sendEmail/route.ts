// app/api/sendEmail/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { subject, body, toEmail } = await request.json();

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
      text:
      `Pessoa: ${subject} 
       Email: ${toEmail} 
       Mensagem: ${body}`,
    };
   

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado com sucesso' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Erro ao enviar email' }, { status: 500 });
  }
}
