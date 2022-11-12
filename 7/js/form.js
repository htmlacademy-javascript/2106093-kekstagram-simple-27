// ВОПРОС
// ВОПРОС
// ВОПРОС
// В консоли ошибка GET http://localhost:3000/js/on-apply-effect net::ERR_ABORTED 404 (Not Found) при импорте...
import { resetEffect } from './on-apply-effect.js';

// ---- Переменные ----
// Переменные для модального окна
const form = document.querySelector('.img-upload__form'); // Форма
const upload = form.querySelector('#upload-file'); // Инпут загрузки файла или в JS открытия modal
const uploadModal = form.querySelector('.img-upload__overlay'); // Modal
const closeUploadModalButton = uploadModal.querySelector('.img-upload__cancel'); // Кнопка закрытия Modal
const overlay = form.querySelector('.img-upload__overlay'); // Overlay
const uploadImage = document.querySelector('.img-upload__preview').querySelector('img'); // Изображение
const sliderContainer = form.querySelector('.effect-level');

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

// Функция открытия Modal
function openModal () {
  uploadModal.classList.remove('hidden');
  resetEffect();
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
  uploadImage.className = ''; // Сбросс фильтров
  form.querySelector('input[id="effect-none"]').checked = true; // Возврат фильтра none
  uploadImage.style.transform = 'scale(1)'; // Сброс до 100% масштабирования изображения
  form.reset();
};

// Функция закрытия Modal
function closeModal () {
  uploadModal.classList.add('hidden');

  // Удаление обработчика для закрытия Modal по клавише
  document.removeEventListener('keydown', onModalKeydown);
  // Установка параметров по умолчанию.
  resetForm();
  resetEffect();
}

//Обработчик для открытия Modal по кнопке
upload.addEventListener('change', () => openModal ());

// Обработчик для закрытия Modal по кнопке
closeUploadModalButton.addEventListener('click', closeModal);

export {form, imageDescription, closeModal, closeUploadModalButton, onModalKeydown, isEscapeKey, uploadImage, sliderContainer};
