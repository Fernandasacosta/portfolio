import Link from "next/link";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobileNav";
import { Computer, ComputerIcon } from "lucide-react";
import { oswald, syncopate, syne } from "@/public/fonts/fonts";
import Image from 'next/image'





const Header = () => {
  return (
    <header id="home" className=" py-8 xl:py-5 text-white">
      <div className="px-0  container mx-auto flex justify-between items-center pt-5">
        {/* LOGO - NAME */}
       <div className="flex flex-row items-center gap-2">
        <Image 
            src="/SprintingDoodle.svg" 
            alt="avatar"
            width={120}
            height={120}
        />
        <Link href="/">
          <h1 className={`${syncopate.className} text-1xl font-semibold`}>
            Fernanda Costa
          </h1>
        </Link>
       </div>

        {/* desktop nav  */}
        <div className= {`${syne.className} bg-[#233831]/40 backdrop-blur-md rounded-3xl mt-14 py-4 px-8 fixed top-0 left-1/2 transform -translate-x-1/2 hidden xl:flex items-center gap-10`}>
          <Nav />
        </div>

        <Link href="/"> 
        <button
          type="button"
          className={`${syne.className} px-6 py-3.5 text-base font-syne text-white  bg-[#233831]/40 backdrop-blur-md hover:bg-[#0E332A] focus:ring-4 focus:outline-none rounded-3xl text-center hidden xl:block`}>
          
            Hire me
        </button>
        </Link>


        {/* mobile nav */}
        <div className="xl:hidden mx-10 mb-7">
          
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;
