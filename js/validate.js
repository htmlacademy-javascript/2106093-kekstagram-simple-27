import { form, closeModal, closeUploadModalButton, onModalKeydown, isEscapeKey } from './form.js';

// ---- валидация формы ----
const validate = function () {
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
  errorButton.addEventListener('click', () => {removeError(); document.addEventListener('keydown', onModalKeydown); } );
  successButton.addEventListener('click', removeSuccess);

  // Код pristine validate
  const pristine = new Pristine(form, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      showSuccess();
      form.submit();
    } else {
      showError();
    }
  });
};

export {validate};
