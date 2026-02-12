import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start((ctx) => {
    ctx.reply("Bot attivo! 🚀");
});

bot.launch();

console.log("Bot avviato!");
