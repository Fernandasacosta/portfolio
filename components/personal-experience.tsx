import { syne } from "@/public/fonts/fonts";
import { Badge } from "./ui/badge";

const PersonalExperience = () => {
  return (
    
    <section id="experiencia" className="text-white min-h-screen flex flex-col justify-center items-center overflow-auto">
      {/* Seção de Experiência Profissional */}
      <div className="flex flex-col lg:flex-row justify-between items-start mx-auto w-full max-w-4xl p-4 sm:p-6 lg:p-8 mb-12">
        {/* Título à esquerda */}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:mr-16">
          <h2 className={`${syne.className} text-3xl font-bold`}>Experiência Profissional</h2>
        </div>
      

        {/* Experiências à direita */}
        <div className="w-full lg:w-3/4 flex-shrink-0">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Estagiária de Desenvolvimento</h3>
            <p className="text-sm text-gray-400 mt-3">Ajaxti : 09/22-09/23</p>
            <p className="mt-2 mb-4">
              Desenvolvimento e implementação de sistemas web, correção de falhas e desenvolvimento de novas funcionalidades em sistemas web, criação de procedures e otimização de consultas para interpretação e visualização de dados, colaboração com equipes multifuncionais para definição de requisitos e especificações técnicas e análise de negócios e definição da arquitetura de sistemas.
            </p>
            {/* Competências em badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">C#</Badge>
              <Badge variant="secondary">OutSystems</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">Angular</Badge>
              <Badge variant="secondary">Jira</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Formação Acadêmica */}
      <div className="flex flex-col lg:flex-row justify-between items-start mx-auto w-full max-w-4xl p-4 sm:p-6 lg:p-8">
        {/* Título à esquerda */}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:mr-16">
        <h2 className={`${syne.className} text-3xl font-bold`}>Formação Academica</h2>
        </div>

        {/* Formação Acadêmicas à direita */}
        <div className="w-full lg:w-3/4 flex-shrink-0">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Análise e Desenvolvimento de Sistemas</h3>
            <p className="text-sm text-gray-400 mt-3">Universidade de Fortaleza : 02/2022-06/2024</p>
            {/* Competências adquiridas em badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">JAVA</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Arquitetura</Badge>
              <Badge variant="secondary">Devops</Badge>
              <Badge variant="secondary">Banco de Dados</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalExperience;
