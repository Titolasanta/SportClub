import express, { Request, Response } from 'express';
import { fetchAllBeneficios, fetchBeneficioById } from '../services/api';

const router = express.Router();

// Route to fetch all beneficios
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await fetchAllBeneficios();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Route to fetch a single beneficio by ID
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const data = await fetchBeneficioById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
