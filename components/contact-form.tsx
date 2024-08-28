'use client'

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Marque a função como `async`
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: data.name,
          body: data.message,
          toEmail: data.email, // Substitua pelo email desejado
        }),
      });

      if (response.ok) {
        console.log('Email enviado com sucesso');
      } else {
        console.error('Erro ao enviar email');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-red-900">
      <div className="w-full max-w-[420px] mx-auto bg-white">
        <h1 className="items-center text-center">
          Vamos trabalhar juntos? Entre em contato
        </h1>

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-orange-400 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-50"
            {...register('name')}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-14 bg-orange-400 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-50"
            {...register('email')}
          />
          <input
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-orange-400 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-50"
            maxLength={500}
            {...register('message')}
          />

          <Button className="rounded-3xl w-max mx-auto mt-6 shadow-button">
            Enviar mensagem
            <ArrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
