import { resetImageEffect, sliderContainer } from './on-apply-effect.js';

// ---- Переменные ----
// Переменные для модального окна
const form = document.querySelector('.img-upload__form');
const upload = form.querySelector('#upload-file');
const uploadModal = form.querySelector('.img-upload__overlay');
const closeUploadModalButton = uploadModal.querySelector('.img-upload__cancel');
const overlay = form.querySelector('.img-upload__overlay');
const uploadImage = document.querySelector('.img-upload__preview').querySelector('img');

// Переменные комметария
const imageDescription = form.querySelector('.text__description');

// ---- Открытие и закрытие модального окна формы
// Функция закрытия Modal по клавише ESC
const isEscapeKey = (evtKey) => evtKey === 'Escape';

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    closeModal();
  }
};

const loadImage = () => {
  uploadImage.src = URL.createObjectURL(upload.files[0]);
};

// Функция открытия Modal
function openModal () {
  sliderContainer.classList.add('hidden');
  uploadModal.classList.remove('hidden');
  resetImageEffect();
  loadImage();
  // Вызов обработчика для закрытия Modal по клавише
  document.addEventListener('keydown', onModalKeydown);
  document.addEventListener('click', clickOutModal);
}

// Функция закрытия модалки по клику вне модалки
function clickOutModal (evt) {
  if (evt.target === overlay) {
    closeModal();
  }
}

// Функция сброса формы до стандартных настроек
const resetForm = function () {
  uploadImage.className = '';
  form.querySelector('input[id="effect-none"]').checked = true;
  uploadImage.style.transform = 'scale(1)';
  form.reset();
};

// Функция закрытия Modal
function closeModal () {
  uploadModal.classList.add('hidden');

  // Удаление обработчика для закрытия Modal по клавише
  document.removeEventListener('keydown', onModalKeydown);
  // Установка параметров по умолчанию.
  resetForm();
  resetImageEffect();
}

//Обработчик для открытия Modal по кнопке
upload.addEventListener('change', () => openModal ());

// Обработчик для закрытия Modal по кнопке
closeUploadModalButton.addEventListener('click', closeModal);

export {form, imageDescription, closeModal, closeUploadModalButton, onModalKeydown, isEscapeKey, uploadImage};
