import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { PiMedalMilitary } from "react-icons/pi";

function AboutSection() {
  return (
    <section className="bg-[#003366] py-24 text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black mb-6 uppercase tracking-wider">
                Sobre Nós
              </h2>

              <p className="text-slate-200 text-lg leading-relaxed">
                Com mais de 15 anos de experiência no mercado imobiliário, nossa
                missão é transformar o sonho da casa própria em realidade,
                oferecendo um atendimento personalizado e consultivo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3 text-blue-200">
                  <span className="material-symbols-outlined">
                    <MdOutlineVerified />
                  </span>
                  <h4 className="font-bold">Missão</h4>
                </div>

                <p className="text-slate-200 text-sm">
                  Proporcionar as melhores soluções imobiliárias com ética e
                  transparência.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3 text-blue-200">
                  <span className="material-symbols-outlined">
                    <MdOutlineVisibility />
                  </span>
                  <h4 className="font-bold">Visão</h4>
                </div>

                <p className="text-slate-200 text-sm">
                  Ser referência em qualidade e confiança no mercado nacional.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3 text-blue-200">
                  <span className="material-symbols-outlined">
                    <MdFavoriteBorder />
                  </span>
                  <h4 className="font-bold">Valores</h4>
                </div>

                <p className="text-slate-200 text-sm">
                  Respeito ao cliente, inovação constante e excelência
                  operacional.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3 text-blue-200">
                  <span className="material-symbols-outlined">
                    <PiMedalMilitary />
                  </span>
                  <h4 className="font-bold">Experiência</h4>
                </div>

                <p className="text-slate-200 text-sm">
                  Milhares de negócios realizados com segurança jurídica total.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4qS2KayO8nBtS6X6bGg42VOHAnMRDSIB_XPSmffSGKtzWW1hWsQ2lvKikEJuwDV4FU3gDeh2Ksea9L2PSdWk-KZrt1GmS1zne10GmSM4T2mFeL6DQuAR8xdMk-YfQrmkDR4wk1A_ry59t0e2vKdU9ljlN6mkJCctLb-QIJuBxRoy9aIxHgv3z8YS1VWHgQhg-48SyFanGc6Zit43VY4fE8iHtxb3V0VSQ269Ywvb78c0o4cL6F3kzJo-60ahGAqRog0rUvE3WUc0"
                alt="Escritório imobiliário"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-[#3B82F6] p-8 rounded-xl hidden md:block">
              <span className="block text-4xl font-black">15+</span>
              <span className="text-sm font-medium opacity-80 uppercase tracking-widest">
                Anos de História
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
