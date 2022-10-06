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
    console.log(`${max} ${min} Значения поменялись местами, теперь ${min} ${max}`);
  }
  randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

randomNumber = getRandomNumber(20, 4);
console.log(`Случайное число равно ${randomNumber}`);

// Функция для проверки максимальной длины строки.

function isLenghtCorrect (string, maxStringLenght) {
  const stringLenght = string.length;
  console.log(`Длина строки ${stringLenght}`);
  if (stringLenght >= maxStringLenght) {
    console.log('Длина строки превышает лимит!');
    return false;
  }
  console.log('Длина строки в норме!');
  return true;
}

const lenghtCorrect = isLenghtCorrect ('Попробуем так, хз получится ли, но попытка не пытка.', 140);
console.log(lenghtCorrect);
