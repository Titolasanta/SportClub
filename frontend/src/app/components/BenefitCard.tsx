import Image from 'next/image';
import { BenefitInfoDetail } from "../interface";
import { Dium } from '../interface/BenefitApi';

const BenefitCard: React.FC<{ benefit: BenefitInfoDetail }> = ({ benefit }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 w-full bg-white max-w-4xl mx-auto">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        {benefit.Imagens[0] &&
            <Image
            src={benefit.Imagens[0].url}
            alt={benefit.comercio}
            width={192} // Equivalent to w-48 (48 * 4px)
            height={192} // Equivalent to h-48 (48 * 4px)
            className="mx-auto md:mx-0"
            />
        }
        <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800">{benefit.comercio}</h2>
                <p className="text-sm text-gray-500 mt-2">{benefit.descripcion}</p>
                <p className="text-xs text-gray-400">{benefit.aclaratoria}</p>
                <p className="mt-2 text-lg font-bold text-green-600">
                    {benefit.descuento}% OFF
                </p>

                {/* Availability */}
                <div className="mt-3">
                    <p className="text-sm">Disponible para:</p>
                    <div className="flex justify-center space-x-2 mt-1">
                        {Object.keys(benefit.Dium).map((day, index) => {
                            if (benefit.Dium[day as keyof Dium]) {
                                return (
                                    <span key={index} className="text-xs text-blue-600">
                                        {day}
                                    </span>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                {/* Efectivo and Tarjeta */}
                <div className="mt-3 flex justify-between items-center">
                    <span
                        className={`text-xs ${
                          benefit.efectivo ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {benefit.efectivo ? 'Efectivo Aceptado' : 'No Efectivo'}
                    </span>
                    <span
                        className={`text-xs ${
                          benefit.tarjeta ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {benefit.tarjeta ? 'Tarjeta Aceptada' : 'No Tarjeta'}
                    </span>
                </div>
            </div>
      </div>
    </div>
  );
};

export default BenefitCard;
