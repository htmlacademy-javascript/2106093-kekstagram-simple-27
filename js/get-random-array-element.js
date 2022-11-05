import {getRandomNumber} from './get-random-number.js';

//Функция для взятия случайного элемента из массива
const getRandomArrayElement = function(array) {
  if (!Array.isArray(array)) {
    throw('Введеные данные не массив!');
  }

  if (array.length === 0) {
    throw ('Введеный масив пуст!');
  }

  if (array.length === 1) {
    return array[0];
  }

  const index = getRandomNumber(0, array.length - 1);
  return array[index];
};

export {getRandomArrayElement};


