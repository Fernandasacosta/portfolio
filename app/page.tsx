import { syne } from "@/public/fonts/fonts";

const Home = () => {
    return (
      <main className="container mx-auto px-0 flex flex-col items-center mt-10 w-full max-w-[95%] h-[75vh]">
        <div className="flex flex-col items-center w-full gap-2 py-8 mt-2">
          <div className="w-full max-w-4xl p-4">
            <h1 className={`${syne.className} text-white text-center text-[6vw] sm:text-6xl mb-4 font-bold`}>
              Desenvolvendo experiências e soluções
              <span className="hidden sm:inline"><br /></span>
              <span className="font-extrabold"> com Tecnologia</span>
            </h1>
          </div>
  
          <div className="w-full max-w-3xl p-4">
            <h3 className={`${syne.className} text-white text-center text-lg mb-3`}>
              Focada em criar soluções digitais únicas e acessíveis que conectam ideias e pessoas.
            </h3>
          </div>
        </div>
      </main>
    );
  }
  
 
export default Home;