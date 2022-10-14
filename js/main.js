// Функция, возвращающая случайное целое число из переданного диапазона включительно

let randomNumber;
function getRandomNumber(min, max) {

  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN + console.log('Введен неподходящий тип данных для параметра MIN или МАX!');
  }

  if (!isFinite(min) || !isFinite(max)) {
    return NaN + console.log('Параметр MIN или MAX не может быть бесконечным числом!');
  }

  if (!Number.isInteger(min)) {
    min = Math.round(min);
    console.log('Значение MIN округлено до большего значения!');
  }

  if (!Number.isInteger(max)) {
    max = Math.round(max);
    console.log('Значение MAX округлено до большего значения!');
  }

  if (min > max) {
    [min,max] = [max,min];
    console.log(`${max} ${min} Значения поменялись местами, теперь ${min} ${max}`);
  }

  if (min < 0 || max < 1) {
    return NaN + console.log('Значение не может быть отрицательным или меньше единицы!');
  }

  console.log(`Приняты значения - MIN=${min}, MAX=${max}`);
  randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNumber;
}

getRandomNumber(2.3, 6);
console.log(`Случайное число равно ${randomNumber}`);

// Функция для проверки максимальной длины строки.

function isLengthLongCorrect (string, maxStringLength) {
  return string.length >= maxStringLength;
}

console.log('Длина строки выше допустимого? ', isLengthLongCorrect('Абра кадабра!', 20));
