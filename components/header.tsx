import Link from "next/link";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobileNav";
import { Computer, ComputerIcon } from "lucide-react";
import { oswald, syncopate, syne } from "@/public/fonts/fonts";





const Header = () => {
  return (
    <header className="py-8 xl:py-5 text-white">
      <div className="px-2 container mx-auto flex justify-between items-center pt-5">
        {/* LOGO - NAME */}
        <Link href="/">
          <h1 className={`${syncopate.className} text-3xl font-semibold`}>
            Fernanda Costa
          </h1>
        </Link>

     

        {/* desktop nav  */}
        <div className= {`${syne.className} bg-[#233831] rounded-3xl mt-8 py-4 px-8 fixed top-0 left-1/2 transform -translate-x-1/2 hidden xl:flex items-center gap-10`}>
          <Nav />
          
        </div>

        <Link href="/">
        <Computer/>
          {/* <Button>Contact me</Button> */}
        </Link>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
