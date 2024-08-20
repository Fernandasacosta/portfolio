import { syncopate, syne } from "@/public/fonts/fonts";

export default function Main() {
  return (
    <main className="container mx-auto px-0 flex flex-col items-center mt-10">
      <div className="flex flex-col items-center w-full gap-2 py-8 mt-2">
        <div className="w-full max-w-4xl p-4">
          <h1 className={`${syne.className} text-white text-center text-6xl mb-4 font-bold`}>
            Usando a tecnologia para <br />
            <span className="font-extrabold">impactar vidas</span>
          </h1>
        </div>

        <div className="w-full max-w-3xl p-4">
          <h3 className={`${syne.className} text-white text-center text-lg mb-3`}>
            Sou apaixonada por criar soluções e desenvolver com e para pessoas desde 2020
          </h3>
        </div>
      </div>
    </main>
  );
}