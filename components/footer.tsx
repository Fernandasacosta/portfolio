import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { GithubIcon, Linkedin, Mail, MapPinHouse, Phone } from "lucide-react";

const icons = [
  { Icon: MapPinHouse, tooltip: "Fortaleza, Ceará" },
  { Icon: GithubIcon, link: "https://www.github.com/fernandasacosta", tooltip: "fernandasacosta" },
  { Icon: Mail, link: "mailto:fernandasacostaa@gmail.com", tooltip: "fernandasacostaa@gmail" },
  { Icon: Linkedin, link: "https://www.linkedin.com/in/fernandasacosta", tooltip: "in/fernandasacosta" },
  { Icon: Phone, link: "https://wa.me/5585994108207", tooltip: "whatsapp"},
];

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white bg-[#0E332A] px-0 py-6 text-center md:text-left space-y-4 md:space-y-0">
      
      <span>© Fernanda Costa 2024. Todos os direitos reservados.</span>

      <div className="flex space-x-4">
        {icons.map(({ Icon, link, tooltip }, index) => (
          <TooltipProvider key={index} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        

        
      </div>
    </div>
  );
};

export default Footer;
