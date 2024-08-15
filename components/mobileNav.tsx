"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";

const links = [
  {
    name:"home",
    path:"#"
  },
  {
    name:"resume",
    path:"#resume"
  },
  {
    name:"work",
    path:"#work"
  },
  {
    name:"contact",
    path:"#contact"
  },

  
];
const MobileNav = () => {
  const pathname = usePathname();
  return ( 
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <Menu className="text-[32px] text-accent"/> 
      </SheetTrigger>
      <SheetContent>
      
      </SheetContent>
    </Sheet>
    
    
   );
}
 
export default MobileNav;