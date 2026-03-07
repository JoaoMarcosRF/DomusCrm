import { MdDomain } from "react-icons/md";

function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-150 w-full flex items-center justify-center overflow-hidden" id="home"> 
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 51, 102, 0.6), rgba(0, 51, 102, 0.8)),
            url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk-RFOJZChpug57LmILTQVHYXDyTwMJJJ3bKuWcJdng_R8Oa_Zbklr4DaLU3X_5bGH2SEE41R3YozsxKnmfSMjJTRhSLRCn05tGAsrHs_Cskh2lPTyzouIuMumM38g5E0sE1Le3OQSs4CUYU3-bFp6u0WyUK6hm8Alfq_wqXf4Gkz_ea95pQmBJ1AzDTJ9ou_D3fS0aQ8AandtrLnyx2EmS8RVkSeOJOAhKdNEau2Hq0INRaGhA6gLMNU3m4Li9wzEf_wlsxeygKw")
          `,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
            <span className="text-white text-6xl"><MdDomain/></span>
          </div>
        </div>

        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
          Encontre o imóvel ideal para você
        </h1>

        <p className="text-white/90 text-lg md:text-xl font-medium mb-10">
          Confiança, segurança e qualidade em cada negócio
        </p>

        <button className="bg-white text-[#003366] hover:bg-slate-100 px-10 py-4 rounded-lg text-lg font-bold transition-transform active:scale-95">
          Ver Imóveis
        </button>
      </div>
    </section>
  );
}
export default HeroSection;
