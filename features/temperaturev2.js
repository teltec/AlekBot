// const axios = require("axios");

// module.exports = (controller) => {
//   const convo = new BotkitConversation("temperature", controller);

//   convo.ask(
//     "De qual cidade você deseja saber a temperatura?",
//     async (answer, convo, bot) => {
//       const city = answer;
//       const config = {
//         method: "get",
//         url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
//           ${apikey}units=metric`,
//         headers: {},
//       };
//       try {
//         await axios(config).then(function (response) {
//           const temperature = parseFloat(response.data.main.temp);
//           const text = `A temperatura de hoje em ${city} é de: ${temperature}`;
//           convo.say(text);
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   );

//   controller.hears(
//     "temperature",
//     "message,direct_message",
//     async (bot, message) => {
//       await bot.beginDialog("temperature");
//     }
//   );
// };
