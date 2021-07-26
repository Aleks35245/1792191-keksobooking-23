import { showError, showSuccess } from './message.js';
import { sendData } from './fetch-api.js';
import { resetMap } from './map.js';
import { resetFilter } from './fiter.js';

const form = document.querySelector('.ad-form');
const title = document.querySelector('#title');
const price = document.querySelector('#price');
const type = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const features = document.querySelectorAll('.features__checkbox');
const description = document.querySelector('#description');
const images = document.querySelector('.ad-form__photo');
const avatar = document.querySelector('.ad-form-header__preview img');
const resetButton = document.querySelector('.ad-form__reset');
const minPrice = {
  'flat': 1000,
  'bungalow': 0,
  'house': 5000,
  'palace': 10000,
  'hotel': 3000,
};

const defaultSettings = {
  avatar: avatar.src,
  title: title.value,
  type: type.value,
  price: price.value,
  pricePlaceholder: price.placeholder,
  timein: timein.value,
  timeout: timeout.value,
  roomNumber: roomNumber.value,
  capacity: capacity.value,
  description: description.value,
};

type.addEventListener('change',(evt) => {
  const typeValue = evt.target.value;
  price.placeholder = minPrice[typeValue];
  price.min = minPrice[typeValue];

});

const validateRoomsAndGuestNumber = () => {
  const roomValue = Number(roomNumber.value);
  const capacityValue = Number(capacity.value);
  if (roomValue === 100 && capacityValue !== 0) {
    capacity.setCustomValidity('Данный вариант не для гостей');
  } else if (roomValue !== 100 && capacityValue === 0) {
    capacity.setCustomValidity('Данный вариант предполагает наличие гостей');
  } else if (roomValue < capacityValue) {
    capacity.setCustomValidity('Слишком много гостей для такого количества комнат');
  } else {
    capacity.setCustomValidity('');
  }
};

roomNumber.addEventListener('change', () => {
  validateRoomsAndGuestNumber();
});

capacity.addEventListener('change', () => {
  validateRoomsAndGuestNumber();
});

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

const resetForm = () => {
  avatar.src = defaultSettings.avatar;
  title.value = defaultSettings.title;
  type.value = defaultSettings.type;
  price.value = defaultSettings.price;
  timein.value = defaultSettings.timein;
  timeout.value = defaultSettings.timeout;
  roomNumber.value = defaultSettings.roomNumber;
  capacity.value = defaultSettings.capacity;
  features.forEach((input) => {
    input.checked = false;
  });
  description.value = defaultSettings.description;
  images.innerHTML = '';
};

const resetPage = () => {
  resetForm();
  resetFilter();
  resetMap();
};

const sendSuccess = () => {
  showSuccess();
  resetPage();
};


resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(sendSuccess, showError, formData);
});
