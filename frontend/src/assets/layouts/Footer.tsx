import { FaShareAlt, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail, MdCall,MdDomain, MdOutlineMail } from "react-icons/md";
import { MdCamera } from "react-icons/md";

export function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-400 py-16" id="contat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-3xl">
                <MdDomain />
              </span>
              <span className="text-xl font-black tracking-tight uppercase">
                Domus
              </span>
            </div>

            <p className="text-sm">
              Sua parceira ideal para encontrar o imóvel que você sempre sonhou.
              Do aluguel à compra do alto padrão.
            </p>

            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-white text-xl">
                  <FaShareAlt />
                </span>
              </a>

              <a
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-white text-xl">
                  <MdCamera />
                </span>
              </a>

              <a
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-white text-xl">
                  <MdAlternateEmail />
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Úteis</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Imóveis à Venda
                </a>
              </li>

              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Imóveis para Aluguel
                </a>
              </li>

              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Seja um Parceiro
                </a>
              </li>

              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">
                  <MdCall/>
                </span>
                <span>(81) 9 9999-9999</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">
                  <FaWhatsapp />
                </span>
                <span>(81) 98888-7777</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">
                  <MdOutlineMail />
                </span>
                <span><a href="mailto:contato@domus.com.br">contato@domus.com.br</a></span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Localização</h4>

            <p className="text-sm mb-4 leading-relaxed">
              R. Padre Carapuceiro, 590 - Boa Viagem, Recife - PE, 51020-280
            </p>

            <div className="w-60 h-60 rounded-lg overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8405484263108!2d-34.90277012594469!3d-8.117712481233912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fae648c0001%3A0xc42db81b05753410!2sFaculdade%20Nova%20Roma%20-%20Boa%20Viagem!5e0!3m2!1spt-BR!2sbr!4v1772809661924!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>
            © {anoAtual} Domus Imobilíaria. Todos os direitos reservados. CRECI:
            12345-J
          </p>
        </div>
      </div>
    </footer>
  );
}
