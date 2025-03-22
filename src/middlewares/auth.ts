import TelegramBot from 'node-telegram-bot-api';

export function isAuthorizedUser(msg: TelegramBot.Message): boolean {
  const allowed = process.env.AUTHORIZED_USERS?.split(',') || [];
  const username = msg.from?.username || '';
  return allowed.includes(username);
}