import { isEscapeEvent } from './utils.js';

const onSuccessEscapeKeydown = (evt) => {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onErrorEscapeKeydown = (evt) => {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const onSuccessClick = (evt) => {
  evt.preventDefault();
  closeSuccessMessage();
};

const onErrorClick = (evt) => {
  evt.preventDefault();
  closeErrorMessage();
};

const onErrorButtonClick = (evt) => {
  evt.preventDefault();
  closeErrorMessage();
};

function closeSuccessMessage () {
  document.querySelector('.success').remove();
  document.removeEventListener('click', onSuccessClick);
  document.removeEventListener('keydown', onSuccessEscapeKeydown);
}

function closeErrorMessage () {
  document.querySelector('.error').remove();
  document.removeEventListener('click', onErrorClick);
  document.removeEventListener('keydown', onErrorEscapeKeydown);
}

const showSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const succsessClone = successTemplate.cloneNode(true);
  document.body.append(succsessClone);
  document.addEventListener('click', onSuccessClick);
  document.addEventListener('keydown', onSuccessEscapeKeydown);
};

const showError = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorClone = errorTemplate.cloneNode(true);
  document.body.append(errorClone);
  errorClone.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.addEventListener('click', onErrorClick);
  document.addEventListener('keydown', onErrorEscapeKeydown);
};

export {showSuccess, showError};
