// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    console.log('Введен неподходящий тип данных для параметра MIN или МАX!');
    return NaN;
  }

  if (!isFinite(min) || !isFinite(max)) {
    console.log('Параметр MIN или MAX не может быть бесконечным числом!');
    return NaN;
  }

  if (!Number.isInteger(min)) {
    min = Math.round(min);
    console.log('Значение MIN округлено!');
  }

  if (!Number.isInteger(max)) {
    max = Math.round(max);
    console.log('Значение MAX округлено!');
  }

  if (min > max) {
    [min,max] = [max,min];
    console.log(`${max} ${min} Значения поменялись местами, теперь ${min} ${max}`);
  }

  if (min < 0 || max < 1) {
    console.log('Значения не может быть отрицательным или меньше единицы!');
    return NaN;
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

export {getRandomNumber};
