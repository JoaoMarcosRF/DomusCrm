import { useEffect, useState } from "react";
import type { Property } from "../types/Property";
import PropertyCard from "../components/PropertyCard";

function PropertiesSection() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API VAI AQUI CHEFE
    setTimeout(() => {
      setProperties([]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24" id="properties">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-[#003366] mb-2 uppercase tracking-tight">
          Nossas Oportunidades
        </h2>
        <div className="h-1.5 w-20 bg-[#003366] rounded-full"></div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-400">
          Carregando imóveis...
        </div>
      ) : properties.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          Nenhum imóvel disponível no momento.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
      <div className="mt-12 text-center">
        <button className="border-2 border-[#003366] text-[#003366] hover:bg-[#0F172A] hover:text-white px-8 py-3 rounded-lg font-bold transition-all">
          Explorar Todos os Imóveis
        </button>
      </div>
    </section>
  );
}

export default PropertiesSection;
