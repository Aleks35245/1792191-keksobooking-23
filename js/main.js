function randomInteger(min, max) {
  // задаем функцию randomInteger(min, max)
  const rand = min + Math.random() * (max + 1 - min);
  // находим случайное число rand - использование метода Math.random() взял из источника
  // https://learn.javascript.ru/task/random-int-min-max
  return (min > max || min < 0) ? 'Min не может быть больше Max и меньше 0!' : Math.floor(rand);
  // результат функции через использование тернарного оператора для выполнения условий ДЗ
  // - положительный диапазон и минимум меньше максимума
  // округление числа rand до целого числа методом Math.floor() - взял  из источника https://learn.javascript.ru/number
}
randomInteger(); // вставил временно для проверки

function randomDouble(min, max,countChar) {
  // задаем функцию randomDouble(min, max,countChar)
  const num = min + Math.random() * (max - min);
  // находим случайное число num - использование метода Math.random() взял из источника
  // https://learn.javascript.ru/task/random-int-min-max
  return (min > max || min < 0) ? 'Min не может быть больше Max и меньше 0!' : +num.toFixed(countChar);
  // результат функции через использование тернарного оператора для выполнения условий ДЗ
  // - положительный диапазон и минимум меньше максимума
  // округление числа num до countChar-знаков методом .toFixed() - взял  из источника https://learn.javascript.ru/number
}
randomDouble(); // вставил временно для проверки