import { sendEmail } from '@/app/actions/sendEmail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData(); // Captura os dados do formulário
    await sendEmail(formData); // Chama a função de envio de e-mail

    return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ success: false, message: 'Erro ao enviar e-mail' }, { status: 500 });
  }
}
