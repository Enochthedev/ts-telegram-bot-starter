import { startCommand } from './start';
import { helpCommand } from './help';
// import more commands here...

export const commandRegistry = [startCommand, helpCommand]; // Add more commands to this array
// This array will be used to register commands in the bot