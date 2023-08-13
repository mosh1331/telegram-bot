require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the actual API token you received from BotFather
console.log(process.env.API_KEY,'process.env.API_KEY')
const bot = new TelegramBot(process.env.API_KEY, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I am your bot.');
});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const echoMessage = match[1];
    bot.sendMessage(chatId, `You said: ${echoMessage}`);
});

// Handle other commands or messages here

console.log('Bot is running...');
