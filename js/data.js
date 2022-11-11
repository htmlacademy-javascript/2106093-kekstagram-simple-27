import {getRandomNumber} from './get-random-number.js';
import {getRandomArrayElement} from './get-random-array-element.js';

//Объявление переменных
const DESCRIPTIONS = [
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

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 0,
  MAX: 200,
};

//Функция для создания случайного фото обьекта
const createPhoto = function(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(Likes.MIN, Likes.MAX),
    comments: getRandomNumber(Comments.MIN, Comments.MAX),
  };
};

//Функция для генерации массива с объектами
const QUANTITY_PHOTOS = 25;

const generatePictures = function() {
  const array = [];

  for (let i = 0; i < QUANTITY_PHOTOS; i++) {
    array.push(createPhoto(i + 1));
  }
  console.log('Вывод первого и последнего эллемента для проверки ', array[0], array[array.length - 1]);
  return array;
};

export {generatePictures};
