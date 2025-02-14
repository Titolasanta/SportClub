import { fetchAllBeneficios, fetchBeneficioById } from '../src/services/api';
import axios from 'axios';

jest.mock('axios'); // Mock axios

describe('Beneficio Service', () => {
  beforeAll(() => {
    process.env.API_URL = 'https://mocked-api.com/beneficios/'; // Mock the base URL
  });

  describe('fetchAllBeneficios', () => {
    it('should fetch all beneficios', async () => {
      
      const mockData = [{ id: 1, name: 'Benefit 1' }, { id: 2, name: 'Benefit 2' }];

      const axiosResponse = {
        data: mockData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };

      (axios.get as jest.Mock).mockResolvedValueOnce(axiosResponse);

      const data = await fetchAllBeneficios();
      expect(data).toEqual(mockData);
    });

    it('should throw an error when API call fails', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error('API error'));

      await expect(fetchAllBeneficios()).rejects.toThrow('Failed to fetch beneficios');
    });
  });

  describe('fetchBeneficioById', () => {
    it('should fetch a single beneficio by ID', async () => {
      const mockData = { id: 1, name: 'Benefit 1' };

      const axiosResponse = {
        data: mockData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };
      
      (axios.get as jest.Mock).mockResolvedValueOnce(axiosResponse);

      const data = await fetchBeneficioById("1");
      expect(data).toEqual(mockData);
    });

    it('should throw an error when API call fails', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error('API error'));

      await expect(fetchBeneficioById("1")).rejects.toThrow('Failed to fetch beneficio with ID: 1');
    });
  });
});
