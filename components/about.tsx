import { syne } from "@/public/fonts/fonts";

const About = () => {
  return (
    <div id="sobre" className="text-white">
      <div className="container mx-auto min-h-screen overflow-visible pb-10">
      <h2 className={`${syne.className} mt-20 text-center text-3xl md:text-4xl font-bold`}>
         Sobre
        </h2>
        <h3 className="p-4 text-4xl mt-10 uppercase md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-w-3xl">
          Olá, sou Fernanda! uma desenvolvedora graduada com uma paixão por design, dados e desenvolvimento.
        </h3>
        <p className="mx-4 mt-10 text-base leading-loose md:text-lg lg:text-xl">
          Minha abordagem é centrada em entender as necessidades do cliente e colaborar estreitamente com a equipe para alcançar resultados excepcionais. Além de transformar ideias criativas em soluções práticas, estou sempre aprendendo e explorando novas áreas do conhecimento. Fora do mundo da tecnologia, gosto de música, artes em geral e nadar em águas abertas, atividades que me ajudam a manter a mente aberta e criativa. Minha jornada é impulsionada pela busca contínua de novos desafios e pela vontade de criar experiências significativas e impactantes.
        </p>
      </div>
    </div>
  );
}

export default About;
