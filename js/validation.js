import { form, imageDescription, closeModal, closeUploadModalButton, onModalKeydown, isEscapeKey } from './form.js';

// ---- валидация формы ----
const validation = function () {
  // Переменные шаблонов сообщений при загрузке фото
  const error = document.querySelector('#error').content.querySelector('.error');
  const success = document.querySelector('#success').content.querySelector('.success');
  const errorButton = error.querySelector('.error__button');
  const successButton = success.querySelector('.success__button');

  // Функция удаления окна ошибки
  const removeError = () => {
    document.querySelector('.error').remove();
  };

  // Функция закрытия окна ошибки по кнопке
  const onErrorKeydown = (evt) => {
    if (isEscapeKey(evt.key)) {
      evt.preventDefault();
      removeError();
      document.addEventListener('keydown', onModalKeydown);
      document.removeEventListener('keydown', onErrorKeydown);
    }
  };

  // Функция добавления окна ошибки на страницу
  const showError = () => {
    document.body.append(error);

    error.focus();

    closeUploadModalButton.addEventListener('click', closeModal);
    document.removeEventListener('keydown', onModalKeydown);
    document.addEventListener('keydown', onErrorKeydown);
  };

  // Функция удаления окна успешной загрузки
  const removeSuccess = () => {
    document.querySelector('.success').remove();
    closeModal();
  };

  // Функция закрытия окна успеха по кнопке
  const onSuccessKeydown = (evt) => {
    if (isEscapeKey(evt.key)) {
      evt.preventDefault();
      removeSuccess();
      document.addEventListener('keydown', onModalKeydown);
      document.removeEventListener('keydown', onSuccessKeydown);
    }
  };

  // Функция добавления окна успешной загрузки на страницу
  const showSuccess = () => {
    document.body.append(success);

    document.removeEventListener('keydown', onModalKeydown);
    document.addEventListener('keydown', onSuccessKeydown);
  };

  //Добавление обработчиков на кнопки окон ошибки и успеха
  errorButton.addEventListener('click', removeError);
  successButton.addEventListener('click', removeSuccess);

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
