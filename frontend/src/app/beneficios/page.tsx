

import BenefitsFinder from "../components/BenefitFinder";



export default function Home() {

  return (
    <div className="mx-auto bg-gray-100">
      <div className="w-4/5  min-h-screen  flex flex-col p-8  mx-auto">
        <h1 className="text-5xl font-bold">Beneficios</h1>
        <h2 className="text-l font-bold text-gray-400 mb-5">Busque sus Beneficios</h2>
         <BenefitsFinder/>
      </div>
    </div>
  );
}
