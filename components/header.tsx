import Link from "next/link";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobileNav";


const Header = () => {
  return (
    <header className="py-8 xl:py-5 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO - NAME */}
        <Link href="/">
          <h1 className="text 4x1 font-semibold">
            Fernanda Costa
          </h1>
        </Link>

        {/* desktop nav  */}
        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
        <Link href="/contact">
          <Button>Hire me </Button>
        </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
       
      </div>
    </header>
  )
}

export default Header;