// Функция, возвращающая случайное целое число из переданного диапазона включительно
let randomNumber;
function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return console.log('Введено неверное значение!');
  }
  if (min > max) {
    const temporaryVariable = min;
    min = max;
    max = temporaryVariable;
    console.log('Значения поменялись местами ' + min + ' ' + max);
  }
  randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

randomNumber = getRandomNumber(20, 4);
console.log(randomNumber);
