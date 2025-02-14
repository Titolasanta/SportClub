'use client'

// pages/benefits/[id].tsx
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useFetchBenefits } from '@/app/hooks/useFetchBenfit';
import { BenefitInfoDetail } from '@/app/interface/BenefitApi';
import BenefitCard from '@/app/components/BenefitCard';

const BenefitDetail = () => {
  const pathname = usePathname();
  const [benefit, setBenefit] = useState<BenefitInfoDetail | undefined>();

  const { data: benefit_list, error: error_list, loading: loading_list } = useFetchBenefits(
    'https://api-beneficios.dev.sportclub.com.ar/api/beneficios/'
  );

  useEffect(() => {
    const benefitId = pathname?.split('/').pop(); // Extract the ID from the URL

    if (benefitId && benefit_list) {
      const selectedBenefit = benefit_list.find((item) => item.id === parseInt(benefitId));
      setBenefit(selectedBenefit);
    }
  }, [pathname, benefit_list]);

  if (loading_list) return <p>Loading...</p>;
  if (error_list) return <p>Error: {error_list}</p>;
  if (!benefit) return <p>Benefit not found</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
        <header className="benefit-header text-center mb-6">
          <h1 className="benefit-title text-3xl font-semibold text-gray-800">{benefit.comercio}</h1>
          <p className="benefit-description text-gray-600">{benefit.descripcion}</p>
        </header>

        <section className="benefit-image-section flex justify-center mb-6">
          <BenefitCard benefit={benefit} />
        </section>

        <section className="benefit-info text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">More Info</h2>
          <ul className="info-list space-y-2 text-gray-600">
            <li><strong>Puntuacion:</strong> {benefit.puntuacion}</li>
            <li><strong>Payclub:</strong> {benefit.payclub}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BenefitDetail;
