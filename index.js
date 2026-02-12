import { Telegraf } from "telegraf";
import http from "http";

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("OK - Bot is running");
}).listen(process.env.PORT || 3000, () => {
  console.log("Keep-alive server running");
});

bot.start((ctx) => {
  ctx.reply("Bot attivo! 🚀\nPronto a ricevere comandi.");
});

bot.launch().then(() => {
  console.log("Bot Telegram avviato correttamente!");
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
