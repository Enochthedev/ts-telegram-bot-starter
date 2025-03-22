import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { handleCommand } from './handlers/commandHandler';
import { handleMessage } from './handlers/messageHandler';
import { logger } from './utils/logger';
import { databaseService } from './services/database.service';

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN!, { polling: true });

bot.on('message', async (msg) => {
  const userId = String(msg.from?.id);
  const username = msg.from?.username;

  // Auto-add to DB on any message
  await databaseService.addUser(userId, username);

  if (msg.text?.startsWith('/')) {
    handleCommand(bot, msg);
  } else {
    handleMessage(bot, msg);
  }
});

logger.info('🤖 Telegram bot is running...');