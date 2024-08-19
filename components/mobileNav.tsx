"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Menu, Home, FileText, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "#",
    icon: Home,
  },
  {
    name: "resume",
    path: "#resume",
    icon: FileText,
  },
  {
    name: "work",
    path: "#work",
    icon: Briefcase,
  },
  {
    name: "contact",
    path: "#contact",
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
          className="flex justify-center items-center"
        >
          <Menu className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#0E332A] text-white">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">Fernanda</h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
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
