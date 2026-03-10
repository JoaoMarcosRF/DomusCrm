import { MdDomain } from "react-icons/md";
import { Link } from "react-router";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-4xl text-[#003366]">
              <MdDomain />
            </span>
            <span className="text-xl font-black tracking-tighter text-[#003366] uppercase">
              Domus
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="relative text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:text-[#003366]
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
              after:bg-[#003366] after:transition-all after:duration-300
              hover:after:w-full"
            >
              Home
            </a>

            <a
              href="#properties"
              className="relative text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:text-[#003366]
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
              after:bg-[#003366] after:transition-all after:duration-300
              hover:after:w-full"
            >
              Comprar
            </a>

            <a
              href="#properties"
              className="relative text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:text-[#003366]
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
              after:bg-[#003366] after:transition-all after:duration-300
              hover:after:w-full"
            >
              Alugar
            </a>

            <a
              href="#about"
              className="relative text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:text-[#003366]
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
              after:bg-[#003366] after:transition-all after:duration-300
              hover:after:w-full"
            >
              Sobre nós
            </a>

            <Link to={"/login"}>
              <a
                href="#about"
                className="relative text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:text-[#003366]
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
              after:bg-[#003366] after:transition-all after:duration-300
              hover:after:w-full"
              >
                CRM
              </a>
            </Link>
          </nav>

          <button className="bg-[#003366] hover:bg-[#0F172A] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105">
            <a href="#contat">Fale conosco</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
