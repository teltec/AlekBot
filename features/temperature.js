const textFormat = require("../utils/textFormat");
const axios = require("axios");

module.exports = async (controller) => {
  const config = {
    method: "get",
    url:
      "https://y5s4g14t3k.execute-api.us-east-1.amazonaws.com/development/temperatures",
    headers: {},
  };

  await axios(config).then((response) => {
    try {
      const parsedResponse = JSON.parse(response.data.temperatures);
      const data = parseFloat(parsedResponse[0].temperature[0].data);
      const temperatureMessage = textFormat(data);

      controller.hears(
        ["temperatura", "temp"],
        "message,direct_message",
        async (bot, message) => {
          await bot.reply(message, temperatureMessage);
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
};
