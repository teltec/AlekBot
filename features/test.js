var axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.openweathermap.org/data/2.5/weather?q=florianopolis&units=metric&appid=6431a1f83b9a1e98ba6ff416cf3045a6',
  headers: { }
};

axios(config).then(function (response) {

})
.catch(function (error) {
  console.log(error);
});
