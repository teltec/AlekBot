const axios = require('axios');


module.exports = async (controller) => {

  const convo = new BotkitConversation( 'temperature', controller );
  let city = '';
  const config = {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6431a1f83b9a1e98ba6ff416cf3045a6&units=metric`,
    headers: { }
  };

  convo.ask(
      'De qual cidade você deseja saber a temperatura?',
      async ( answer, convo, bot ) => {
        city = answer;
      },
  );

  convo.say(async(convo, bot) => {
    
  await axios(config).then(function (response) {
    const temperature = parseFloat(response.data.main.temp);
    const text = `A temperatura de hoje em ${city} é de: ${temperature}`;

  }).catch(function (error) {
    console.log(error);
  });
  })

  controller.hears( 'temperature', 'message,direct_message', async ( bot, message ) => {
    await bot.beginDialog( 'temperature' );
});
  
}

