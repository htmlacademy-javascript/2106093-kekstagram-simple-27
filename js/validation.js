import { form, imageDescription, closeOverlay } from './form.js';

// ---- валидация формы ----
const validation = function () {
  // Переменные шаблонов сообщений при загрузке фото
  const error = document.querySelector('#error').content.querySelector('.error');
  const success = document.querySelector('#success').content.querySelector('.success');

  // Функция добавления окна ошибки на страницу
  const showError = () => {
    document.body.append(error);
  };

  // Функция удаления окна ошибки
  const removeError = () => {
    document.querySelector('.error').remove();
  };

  // Функция добавления окна успешной загрузки на страницу
  const showSuccess = () => {
    document.body.append(success);
  };

  // Функция удаления окна успешной загрузки
  const removeSuccess = () => {
    document.querySelector('.success').remove();
    closeOverlay();
  };

  //Добавление обработчиков на кнопки окон ошибки и успеха
  error.querySelector('.error__button').addEventListener('click', removeError);
  success.querySelector('.success__button').addEventListener('click', removeSuccess);

  let flag = false;
  imageDescription.addEventListener('blur', () => {
    const descriptionRange = {
      MIN: 20,
      MAX: 140
    };

    const valueLength = imageDescription.value.length;
    if (valueLength < descriptionRange.MIN || valueLength > descriptionRange.MAX) {
      flag = false;
    } else {
      flag = true;
    }
  });

  form.querySelector('.img-upload__submit').addEventListener('click', () => {
    if (flag === false) {
      showError();
    } else {
      showSuccess();
      form.submit();
    }
  });
};

export {validation};
