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
    return NaN + console.log('Значение не может быть отрицательным или меньше единицы!');
  }

  // console.log(`Приняты значения - MIN=${min}, MAX=${max}`);
  randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNumber;
}

getRandomNumber(1, 10);
console.log(`Случайное число равно ${randomNumber}`);


// Функция для проверки максимальной длины строки.
function isLengthLongCorrect (string, maxStringLength) {
  return string.length >= maxStringLength;
}

console.log('Длина строки выше допустимого? ', isLengthLongCorrect('Какая то строка! ', 20));

//Функция для взятия случайного элемента из массива
const getRandomArrayElement = function(array) {
  if (!Array.isArray(array)) {
    console.log('Введеные данные не массив!');
    return undefined;
  }

  if (array.length === 0) {
    console.log('Введеный масив пуст!');
    return undefined;
  }

  if (array.length === 1) {
    console.log('Массив состоит из одного элемента!');
    return array[0];
  }

  const index = getRandomNumber(0, array.length - 1);
  return array[index];
};

//Объявление переменных
const descriptions = [
  'Замученный дорогой, я выбился из сил,',
  'И в доме лесника я ночлега попросил.',
  'С улыбкой добродушной старик меня впустил,',
  'И жестом дружелюбным на ужин пригласил.',
  'Будь как дома путник, я ни в чем не откажу,',
  'Я ни в чем не откажу, я ни в чем не откажу!',
  'Множество историй, коль желаешь, расскажу,',
  'Коль желаешь, расскажу, коль желаешь, расскажу!',
  'На улице темнело, сидел я за столом.',
  'Лесник сидел напротив, болтал о том, о сем.',
  'Что нет среди животных у старика врагов,',
  'Что нравится ему подкармливать волков.',
  'И волки среди ночи завыли под окном.',
  'Старик заулыбался и вдруг покинул дом.',
  'Но вскоре возвратился с ружьем на перевес:',
  'Друзья хотят покушать, пойдем приятель в лес!',
  'Будь как дома путник, я ни в чем не откажу,',
  'Я ни в чем не откажу, я ни в чем не откажу!',
  'Множество историй, коль желаешь, расскажу,',
  'Коль желаешь, расскажу, коль желаешь, расскажу!',
  'Aaaa ',
  'Yyyyy',
  'Aaaaa-yyyyyy',
  'Yyyyyy-aaaaaa',
  'Конец'
];
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 200;

//Функция для создания случайного фото обьекта
const createPhoto = function(index) {
  return {
    id: index,
    url: `/photos/${index}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomNumber(LIKES_MIN, LIKES_MAX),
    comments: getRandomNumber(COMMENTS_MIN, COMMENTS_MAX),
  };
};

//Функция для генерации массива с объектами
const QUANTITY_PHOTOS = 25;

const generatePhotoArray = function() {
  const array = [];

  for (let i = 0; i < QUANTITY_PHOTOS; i++) {
    array.push(createPhoto(i + 1));
  }
  console.log('Вывод первого и последнего эллемента для проверки ', array[0], array[array.length - 1]);
  return array;
};

generatePhotoArray();
