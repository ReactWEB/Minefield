/*1. Создаем HTML без квадратиков внутри
2. Генерируем квадратики с помощью гридов и js
3. Написать функцию события, в которой будут рандомно, в одном из квадратов, появляться класс с синим цветом при нажатии на кнопку старт. У этого квадрата добавить свое событие клика
4. Написать отдельную функцию для события клика на квадрат. В этой функции мы убираем голубой цвет, увеличиваем очки и удаляем событие КЛИКА НА КВАДРАТ. потом снова запускаем функцию события которое было при старте кнопки.
5. Внутри события старта кнопки сделайте условие так чтобы ровно один раз в начале игры запустился таймаут на 60 сек. По завершению таймаута у нас меняется HTML главного блока на gameover и выводим счёт
6. Обработать это с функцией таймера*/

const field = document.querySelector('.minefield');
const btn = document.querySelector('.start__btn');


for (let i = 0; i < 99; i++) {
  let tile = document.createElement('div');
  tile.className = 'minefield__box';
  field.appendChild(tile);
}

let arrBoxes = document.querySelectorAll('.minefield__box');
console.log(arrBoxes);

const randInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const changePosition = setInterval(() => {
  let startPosition = randInt(arrBoxes[0], arrBoxes.length - 1);  
});

btn.addEventListener('click', changePosition);