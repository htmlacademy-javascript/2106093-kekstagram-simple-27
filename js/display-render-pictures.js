// import {generatePictures} from './data.js'; // Импортируем функцию создания массива обьектов картинок
// const pictures = generatePictures(); // Генерируем картинки

const displayRenderPictures = (picturesData) => {

  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //Находим шаблон для картинок
  const picturesFragment = document.createDocumentFragment(); // Создаем фрагмент для картинок

  picturesData.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true); // Делаем копию шаблона

    pictureElement.querySelector('.picture__img').src = url; // Подставляем путь к картинке
    pictureElement.querySelector('.picture__img').alt = description; // Подставляем описание картинка alt
    pictureElement.querySelector('.picture__comments').textContent = comments; // Подставляем количество коментариев
    pictureElement.querySelector('.picture__likes').textContent = likes; // Подставляем количество лайков

    picturesFragment.append(pictureElement); // Вставляем копию шаблона в разметку
  });

  document.querySelector('.container').append(picturesFragment); //Вставляем элементы из фрагмента в код

};

export {displayRenderPictures};
