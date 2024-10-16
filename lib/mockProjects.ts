interface Project {
  id: number;
  title: string;
  description: string;
  skills: string;
  technologies: string[];
  githubLink?: string;
  vercelLink?: string;
  images: string[];
  image : string[];
}

const projectData: Project[] = [
  {
    id: 1,
    title: "FSW Barber",
    description: "Sistema de agendamento para barbearias com tela de estabelecimentos, gerenciamento de reservas, sistema de busca, carrinho de compras e autenticação com o Google (OAuth).",
    skills: "React, Tailwind, Node.js, Postgres, Prisma, Next.js, Google OAuth, TypeScript",
    technologies: ["React", "Tailwind", "Node.js", "Postgres", "Prisma", "Next.js", "Google OAuth", "TypeScript"],
    githubLink: "https://github.com/Fernandasacosta/barber-shop",
    vercelLink: "https://barber-shop-one-rouge.vercel.app/",
    images: [
      "/barber/Inicio.png", 
      "/barber/Barbearia.png", 
      "/barber/FazerReserva.png", 
      "/barber/Agendamentos.png", 
      "/barber/InformacoesdaReserva.png", 
      "/barber/Buscar.png", 
      "/barber/Menu.png"
    ],
    image: ["/barber/home.svg"],
  },
  {
    id: 2,
    title: "FSW Foods",
    description: "Sistema de delivery com tela de restaurantes, gerenciamento de pedidos, restaurantes favoritos, carrinho de compras e autenticação com o Google (OAuth).",
    skills: "React, Tailwind, Node.js, Postgres, Prisma, Next.js, Google OAuth, TypeScript",
    technologies: ["React", "Tailwind", "Node.js", "Postgres", "Prisma", "Next.js", "Google OAuth", "TypeScript"],
    githubLink: "https://github.com/Fernandasacosta/fsw-foods",
    vercelLink: "https://fsw-foods-mu.vercel.app/",
    images: [
      "/foods/Inicio.png", 
      "/foods/Restaurante.jpg", 
      "/foods/PaginadoProduto.png", 
      "/foods/Sacola.png", 
      "/foods/Pedidos.png", 
      "/foods/RestaurantesFavoritos.png", 
      "/foods/CategoriaJaponesa.jpg", 
      "/foods/Menu.png"
    ],
    image: ["/foods/home.svg"]
  },
  {
    id: 3,
    title: "Candle Store",
    description: "Projeto desenvolvido inicialmente como um e-commerce de produtos gamers e adaptado para ser uma loja de cosméticos. O projeto foi implementado utilizando uma stack moderna para proporcionar uma experiência completa de compras online, com busca de produtos, carrinho e sistema de pagamento.",
    skills: "Next.js, Nest, TurboRepo, Prisma, Postgre, Tailwind, TypeScript",
    technologies: ["Next.js", "Nest", "TurboRepo", "Prisma", "Postgre", "Tailwind", "TypeScript"],
    githubLink: "https://github.com/Fernandasacosta/candleshop",
    images: ["/candle/inicio.png", "/candle/busca.png", "/candle/vazio.png", "/candle/carrinho.png", "/candle/pagamento.png"],
    image: ["/candle/home.svg"]
  },   
  {
    id: 4,
    title: "BDL Artes Marciais",
    description: "O BDL foi um projeto muito importante para mim, desenvolvido na faculdade para uma escola beneficente de artes marciais, focando em design e experiência de usuário. Criado em parceria com Beatriz Vidal, utilizamos Framer e ferramentas no-code para uma solução acessível. A plataforma é responsiva, funcionando tanto para web quanto mobile, e foi pensada para facilitar a gestão e promover a escola na comunidade",
    skills: "Figma, Framer",
    technologies: ["Framer", "Figma"],
    vercelLink: "https://familiabdl.framer.website/",
    images: ["/bdl/inicio.png",  "/bdl/missao.jpg",  "/bdl/alunoss.jpg",  "/bdl/historia.jpg", "/bdl/depoimentos.jpg", "/bdl/doacao.jpg", "/bdl/sedes.jpg", "/bdl/eventos.jpg", "/bdl/footer.jpg",],
    image : ["/bdl/home.svg"]
  },
];

export default projectData;
