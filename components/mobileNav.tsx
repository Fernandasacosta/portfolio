"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Menu, Home, FileText, Briefcase, Mail, Book } from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "início",
    path: "#inicio",
    icon: Home, 
  },
  {
    name: "sobre",
    path: "#sobre",
    icon: FileText, 
  },
  {
    name: "projetos",
    path: "#projetos",
    icon: Briefcase, 
  },
  {
    name: "experiência",
    path: "#experiencia",
    icon: Book, 
  },
  {
    name: "contato",
    path: "#contato",
    icon: Mail, 
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false); // Fecha o Sheet
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className="flex justify-center items-center fixed"
        >
          <Menu className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#0E332A] text-white">
     
        {/* nav */}
        <nav className="flex flex-col justify-center mt-40 items-center  gap-8 ">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`flex items-center gap-2 ${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                  onClick={handleLinkClick}
                >
                  <Icon className="text-xl" />
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
