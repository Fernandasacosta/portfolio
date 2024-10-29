import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/header";
import ContactForm from "@/components/contact-form";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import About from "@/components/about";
import Marquee from "@/components/marquee";
import Projects from "@/components/project/projects";
import PersonalExperience from "@/components/personal-experience";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Fernanda Costa - Desenvolvedora de software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/sprintingDoodle.svg" type="image/x-icon" />
      </head>
      <body
        className={`${inter.className} bg-[#0E332A] text-gray-950 relative sm:dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[20rem] w-[20rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <MainHeader />
        {children}
        <Marquee />
        <About />
        <Projects />
        <PersonalExperience />
        <ContactForm />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
