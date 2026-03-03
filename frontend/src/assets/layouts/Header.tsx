import { MdDomain } from "react-icons/md";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-4xl text-[#003366]">
              <MdDomain />
            </span>
            <span className="text-xl font-black tracking-tighter text-[#003366] uppercase">Domus</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-[#0F172A] hover:text-[#003366] transition-colors">
                Home
            </a>
            <a href="#" className="text-sm font-semibold text-[#0F172A] hover:text-[#003366] transition-colors">
                Comprar
            </a>
            <a href="#" className="text-sm font-semibold text-[#0F172A] hover:text-[#003366] transition-colors">
                Alugar
            </a>
            <a href="#" className="text-sm font-semibold text-[#0F172A] hover:text-[#003366] transition-colors">
                Sobre nós
            </a>
          </nav>

          <button className="bg-[#003366] hover:bg-[#0F172A] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all">
            Fale conosco
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
