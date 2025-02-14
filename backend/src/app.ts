import express from 'express';
import router from './routes/apiRoutes';
import dotenv from 'dotenv';
import { logger, requestLogger } from './middlewares/logger'; 

// Load environment variables
dotenv.config();

const app = express();

app.use(requestLogger);

// Middleware (e.g., JSON parsing, logging, etc., can be added here)
app.use(express.json());




// Routes
app.use('/api/beneficios', router);

export default app;
