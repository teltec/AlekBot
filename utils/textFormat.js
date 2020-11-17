module.exports = (value) => {
  if (value >= 23 && value <= 26) {
    return `A temperatura de hoje é de: ${value}°, e esta ideal!`;
  } 
  else if (value < 23 ) {
    `A temperatura de hoje é de ${value}°, e esta começando a esfriar, vista seu casaco!`;
  } else {
    `A temperatura de hoje é de ${value}°, o calor vem aí, se prepare!`
  }
};
