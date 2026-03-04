import type { Property } from "../types/Property";
import { IoBedOutline } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineStraighten } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${property.image})` }}
        ></div>
        <div className="absolute top-4 left-4 bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-full">
          {property.type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0F172A] mb-2">
          {property.title}
        </h3>

        <p className="text-[#64748B] text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <div className="flex items-center gap-4 mb-6 text-[#475569] text-sm">
          <span>
            <IoBedOutline /> {property.bedrooms}
          </span>
          <span>
            <FaCarSide /> {property.parking_space}
          </span>
          <span>
            <MdOutlineBathroom /> {property.bathroom}
          </span>
          <span>
            <MdOutlineStraighten /> {property.area}m²
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-2xl font-black text-[#003366]">
            {property.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <button className="font-bold text-sm text-[#003366] hover:underline">
            Ver Detalhes →
          </button>
        </div>
      </div>
    </div>
  );
}
export default PropertyCard;
