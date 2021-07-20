const minLengthTitle = 30;
const maxLengthTitle = 100;

const title = document.querySelector('#title');
title.minlength = minLengthTitle;
title.maxlength = maxLengthTitle;


const price = document.querySelector('#price');
const type = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const minPrice = {
  'flat': 1000,
  'bungalow': 0,
  'house': 5000,
  'palace': 10000,
  'hotel': 3000,
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
