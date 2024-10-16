'use client';

import { toast } from 'sonner';
import { syne } from "@/public/fonts/fonts";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import { useFormStatus } from 'react-dom';
import { sendEmail } from '@/app/actions/sendEmail';

const ContactForm = () => {
  const { pending } = useFormStatus();

  return (
    <section id="contato" className="py-16 px-6 md:py-32 flex items-center justify-center bg-[#ece7e1]">
    <div className="w-full max-w-[420px] mx-auto bg-[#ece7e1] rounded-3xl px-4">
   
      <h1 className={`${syne.className} text-center font-bold mt-5 text-4xl mb-4`}>
        Contato
      </h1>
      <h2 className={`${syne.className} text-center`}>
      Entre em contato ou envie um e-mail diretamente para fernandasacosta@gmail.com
      </h2>
  
      <form
        action={sendEmail}
        className="mt-12 w-full flex flex-col gap-4"
        onSubmit={() => {
          if (pending) {
            toast.loading('Enviando...');
          } else {
            toast.success('Email enviado com sucesso!');
          }
        }}
      >
        <input
          placeholder="Nome"
          className="w-full h-14 bg-[#ece7e1] rounded-lg placeholder:text-gray-500 text-gray-500 p-4 focus:outline-none focus:ring-2 ring-slate-50 focus:bg-neutral-50"
          name="name"
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full h-14 bg-[#ece7e1] rounded-lg placeholder:text-gray-500 text-gray-500 p-4 focus:outline-none focus:ring-2 ring-slate-50 focus:bg-neutral-50"
          name="email"
          required
        />
        <textarea
          placeholder="Mensagem"
          className="resize-none w-full h-[138px] bg-[#ece7e1] rounded-lg placeholder:text-gray-500 text-gray-500 p-4 focus:outline-none focus:ring-2 ring-slate-50 focus:bg-neutral-50"
          maxLength={500}
          name="message"
          required
        />
  
        <Button
          className= "bg-[#485665] rounded-lg w-max mx-auto mt-5 shadow-button"
          disabled={pending}
        >
          {pending ? 'Enviando...' : 'Enviar mensagem'}
          <ArrowRight size={18} />
        </Button>
      </form>
    </div>
  </section>
  
  );
};

export default ContactForm;
