// в качестве примера использовался материал из источника https://learn.javascript.ru/task/random-int-min-max
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return (min > max || min < 0) ? 'Min не может быть больше Max и меньше 0!' : Math.floor(rand);
}
alert( randomInteger(1, 5) );

function randomDouble(min, max,countChar) {
  let num = min + Math.random() * (max - min);
  return (min > max || min < 0) ? 'Min не может быть больше Max и меньше 0!' : +num.toFixed(countChar);
}
alert( randomDouble(1, 5, 4) );
