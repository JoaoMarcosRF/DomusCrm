import React from "react";
import { MdDomain } from "react-icons/md";

export const LoginLogo: React.FC = () => {
  return (
    <div className="hidden md:flex md:w-1/2 relative bg-[#0F172A] overflow-hidden items-center justify-center">
      <div className="relative z-10 p-12 text-center">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
          <span className="material-symbols-outlined text-4xl">
            <MdDomain />
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-4">
          DOMUS CRM
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-sm mx-auto">
          A solução de CRM moderna criada especificamente para equipes
          imobiliárias de alto desempenho.
        </p>
      </div>
    </div>
  );
};
