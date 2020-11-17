// Respond to various 'hello' words, attach file by URL and from local file system

var fs = require("fs");

const hello = `Olá, eu sou bot alek, seu assistente pessoal,
você pode a qualquer momento solicitar informações
sobre a temperatura atual, basta você digitar a palavra
temperatura`;

module.exports = function (controller) {
  controller.hears(
    [
      "hi",
      "hello",
      "howdy",
      "hey",
      "aloha",
      "hola",
      "bonjour",
      "oi",
      "olá",
      "alek",
    ],
    "message,direct_message",
    async (bot, message) => {
      await bot.reply(message, hello);
    }
  );

  controller.hears("url", "message,direct_message", async (bot, message) => {
    await bot.reply(message, {
      text: "Aww!",
      files: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Youngkitten.JPG/220px-Youngkitten.JPG",
      ],
    });
  });

  controller.hears("local", "message,direct_message", async (bot, message) => {
    await bot.reply(message, {
      text: "The source code",
      files: [fs.createReadStream("./bot.js")],
    });
  });

  controller.commandHelp.push({ command: "hello", text: "Greetings!" });
  controller.commandHelp.push({
    command: "url",
    text: "Attach a file via URL",
  });
  controller.commandHelp.push({
    command: "local",
    text: "Attach a file from the local file system",
  });
};
