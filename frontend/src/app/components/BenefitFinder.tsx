'use client'

import { useEffect, useState } from 'react';
import BenefitCard from "./BenefitCard";
import { useFetchBenefits } from "../hooks/useFetchBenfit";
import { BenefitInfoDetail } from '../interface/BenefitApi';
import Link from 'next/link';


export default function Home() {

  // Fetch data 
  const { data: benefit_list, error: error_list, loading: loading_list } = useFetchBenefits(
    "https://api-beneficios.dev.sportclub.com.ar/api/beneficios/"
  );



  // Query
  const [searchQuery, setSearchQuery] = useState('');
 
  const [filteredItems, setFilteredItems] = useState<BenefitInfoDetail[]>([]);

  useEffect(() => {
    // Filter items based on the search query
    const filtered = benefit_list.filter(item => {
      console.log(item.comercio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.aclaratoria.toLowerCase().includes(searchQuery.toLowerCase()))
        return (
            item.comercio.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.aclaratoria.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    setFilteredItems(filtered); // Update the filtered items

}, [ searchQuery]);

  

    


  


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  
  
  if (error_list) {
    return (
          <div className="text-red-500">
            <p>Error al cargar beneficios: {error_list}</p>
          </div>
    );
  }
  return (
    <>
        {/* Search Bar */}
        <div className="mb-6 w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-2xl p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <h1 className="text-4xl font-bold my-5">Resultados de la busqueda</h1>
        { /* Benefits List */
        searchQuery &&
          <div className="space-y-4">
            {filteredItems.length === 0 ? (
              <p className="text-gray-500">No items found</p>
            ) : (
              (!loading_list ) 
              ?
              filteredItems.map((beneficio, index) => (
                <Link key={index} href={`/beneficios/${beneficio.id}`} passHref>
                  <div  className="cursor-pointer" key={index} >
                    {  <BenefitCard benefit={beneficio}  /> }
                  </div>
              </Link>
              ))
              :
                  <div className="flex justify-center items-center h-200">
                    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                  </div>
            )}
          </div>
        }
        
    </>
  );
}
