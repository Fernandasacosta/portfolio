import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  bg-[#0E332A] text-gray-950 relative  sm: dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[20rem] w-[20rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-zinc-300 absolute  bottom-[-100rem] -z-10 left-[-35rem] h-[20rem] w-[20rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

             <Header/>
            {children}
           
           

           
      </body>
    </html>
  );
}
