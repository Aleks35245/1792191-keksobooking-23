//— модуль с вспомогательными функциями; используются в main.js

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

/* Функция поиска случайного элемента какого-то массива*/
const getRandomArrayElement = (element) => element[randomInteger(0, element.length - 1)];

export {randomInteger, randomDouble, getRandomArrayElement};
