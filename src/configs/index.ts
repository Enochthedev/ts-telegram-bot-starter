import dotenv from 'dotenv';
import { resolve } from 'path';

// Load the correct .env file based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({ path: resolve(process.cwd(), envFile) });

export const config = {
  environment: process.env.NODE_ENV || 'development',
  telegramToken: process.env.TELEGRAM_TOKEN || '',
  authorizedUsers: (process.env.AUTHORIZED_USERS || '').split(','),
  databaseUrl: process.env.DATABASE_URL || 'file:./default.db',
};