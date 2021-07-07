// eslint-disable-next-line no-console
console.log('Hello');
function randomInteger(min, max) {  /* задаем функцию randomInteger(min, max) случайного целого числа для поиска
  случайного элемента какого-то массива*/
  const rand = min + Math.random() * (max + 1 - min); /* находим случайное число rand - использование метода Math.random()
  взял из источника // https://learn.javascript.ru/task/random-int-min-max*/
  return (min > max || min < 0) ? 'Min не может быть больше Max и меньше 0!' : Math.floor(rand); /*- результат функции
  через использование тернарного оператора для выполнения условий ДЗ - положительный диапазон и минимум меньше максимума
  округление числа rand до целого числа методом Math.floor() - взял  из источника https://learn.javascript.ru/number*/
}

function randomDouble(min, max,countChar) { // задаем функцию randomDouble(min, max,countChar) для нахождения координат
  const num = min + Math.random() * (max - min); /* находим случайное число num - использование метода Math.random() взял из
  источника https://learn.javascript.ru/task/random-int-min-max*/
  return (min > max || min < 0) ? 'Min не может быть больше Max и меньше 0!' : +num.toFixed(countChar);/*- результат функции
  через использование тернарного оператора для выполнения условий ДЗ - положительный диапазон и минимум меньше максимума
  округление числа num до countChar-знаков методом .toFixed() - взял  из источника https://learn.javascript.ru/number*/
}

const getRandomArrayElement = (element) => element[randomInteger(0, element.length - 1)];// Функция поиска случайного элемента какого-то массива

// 21.06.2021 - ДЗ 4.9 составление структуры

const AVATAR = [ /* строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10.
Перед однозначными числами ставится 0. Например, 01, 02...10.
Адреса изображений не повторяются.*/
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [ //, массив строк — массив случайной длины из значений. Значения не должны повторяться.
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [ //массив строк — массив д.б. случайной длины из значений:
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Вспомогательные объекты
const location = () =>  // объект — местоположение в виде географических координат. Состоит из двух полей:
  ({
    lat: randomDouble(35.65000, 35.70000, 5), // число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
    lng: randomDouble(139.70000, 139.80000, 5), // число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
  });
const creatOffer = () => {
  const countArrayFeatures = randomInteger(0, FEATURES.length); /* случайная длина значений  (количество
        элементов) массива FEATURES*/
  const FEATURESSHORT = FEATURES.slice(); //создаем дубль массива FEATURES, будем его сокращать до countArrayFeatures с помощью цикла for
  if (countArrayFeatures > 0) {
    for (let i=0; i < countArrayFeatures; i++) { // уменьшаем массив до countArrayFeatures индексов
      const randomElementArray = randomInteger(0, FEATURESSHORT.length-1); // случайный индекс массива FEATURESSHORT
      FEATURESSHORT.splice(randomElementArray, 1); // удаляем случайный индекс массива
    }
  }
  const countArrayPhotos = randomInteger(0, PHOTOS.length); /* случайная длина значений  (количество
          элементов) массива PHOTOS*/
  const PHOTOSSHORT = PHOTOS.slice(); //создаем дубль массива, будем его сокращать до countArrayPhotos с помощью цикла for
  if (countArrayPhotos > 0) {
    for (let i=0; i < countArrayPhotos; i++) { // уменьшаем массив до countArrayPhotos индексов
      const randomElementArray = randomInteger(0, PHOTOSSHORT.length-1); // случайный индекс массива PHOTOSSHORT
      PHOTOSSHORT.splice(randomElementArray, 1); // удаляем случайный индекс массива
    }
  }
  return {
    address: `${location.lat}, ${location.lng}`, /*- address, строка — адрес предложения. Для простоты пусть пока составляется из
      географических координат по маске {{location.lat}}, {{location.lng}}.*/
    title: `Предложение отеля по адресу: ${this.address}, стоимость ${this.price} $`, /*- title, строка — заголовок предложения.
      Придумайте самостоятельно.*/
    price: Math.floor(Math.random() * 100) + 10, /*- price, число — стоимость. Случайное целое положительное число.
      Math.floor(Math.random() * 100) + 10 --возвращает случайное целое число от 10 до 100 'источник https://schoolsw3.com/',*/
    type: getRandomArrayElement(TYPE), //- type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
    rooms: Math.floor(Math.random() * 10) + 1, /*- rooms, число — количество комнат. Случайное целое положительное число.
      Math.floor(Math.random() * 10) + 1 --возвращает случайное целое число от 1 до 10 'источник https://schoolsw3.com/',*/
    guests: Math.floor(Math.random() * 11), /* - guests, число — количество гостей, которое можно разместить. Д.б. случайное целое
      положительное число. Math.floor(Math.random() * 11) --возвращает случайное целое число от 0 до 10 'источник https://schoolsw3.com/',*/
    checkin: getRandomArrayElement(CHECKIN), //- checkoin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
    checkout: getRandomArrayElement(CHECKOUT), //- checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
    features: FEATURESSHORT.join(), /*- features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator,
      conditioner. Значения не должны повторяться.*/
    description: `Номер состоит из ${this.rooms} комнат и имеет такие опции как: ${this.features}`,/* - description, строка — описание
      помещения. Придумайте самостоятельно.*/
    photos: PHOTOSSHORT.join(),/* - берем массив PHOTOSSHORT - случайноукороченный массив PHOTOS. PHOTOS, массив строк — массив случайной длины из значений*/
  };
};

const SIMILARADVERT = new Array(AVATAR.length).fill(null); //- пустой массив с объектами. будем наполнять его до 10 с помощью цикла. /;

/* !!! Главная функция createAdvert, которая будет создавать нужный один объект, описывающий Одно Объявление.
Далее вставляем его в массив similarAdvert*/
for (let authorIndex = 0; authorIndex < AVATAR.length - 1; authorIndex++) { // цыкл собирает объект newAdvert от 1 до 10 и добавляет объект в массив similarAdvert
  const newAdvert = () => ({
    author: AVATAR[authorIndex],
    offer: creatOffer(),
    location: location(),
  });
  SIMILARADVERT[authorIndex] = newAdvert;
}

// eslint-disable-next-line no-console
console.log(SIMILARADVERT);
