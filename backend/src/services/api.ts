import axios from 'axios';
import { BeneficioDTO, BeneficiosDTO } from '../types/dto'; 
import redis from '../cache/redis'

const BASE_URL = "https://api-beneficios.dev.sportclub.com.ar/api/beneficios/";

async function fetchAllBeneficios(): Promise<BeneficiosDTO> {
  const cacheKey = 'allBeneficios'; 

  // Check if data exists in Redis cache
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData); // Return cached data if available
  }

  try {
    const response = await axios.get<BeneficiosDTO>(`${BASE_URL}`);
    // Store the fetched data in Redis with a 1 hour expiration time
    await redis.set(cacheKey, JSON.stringify(response.data), 'EX', 3600);
    return response.data; 
  } catch (error) {
    throw new Error('Failed to fetch beneficios');
  }
}

async function fetchBeneficioById(id: string): Promise<BeneficioDTO> {
  const cacheKey = `beneficio-${id}`; 

  // Check if data exists in Redis cache
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData); // Return cached data if available
  }

  try {
    const response = await axios.get<BeneficioDTO>(`${BASE_URL}${id}`);
    // Store the fetched data in Redis with a 1 hour expiration time
    await redis.set(cacheKey, JSON.stringify(response.data), 'EX', 3600);
    return response.data;  
  } catch (error) {
    throw new Error(`Failed to fetch beneficio with ID: ${id}`);
  }
}

export { fetchAllBeneficios, fetchBeneficioById };
