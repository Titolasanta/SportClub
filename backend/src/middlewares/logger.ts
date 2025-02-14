import { createLogger, transports, format, Logger } from 'winston';
import { Request, Response, NextFunction } from 'express';

interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
}

const logger: Logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf((info: any) => {
      
      const { timestamp, level, message } = info as LogEntry;
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/server.log' }),
  ],
});


const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  logger.info(`${req.method} ${req.url}`);
  next();
};

export { logger, requestLogger };
