/*1. Создаем HTML без квадратиков внутри
2. Генерируем квадратики с помощью гридов и js
3. Написать функцию события, в которой будут рандомно, в одном из квадратов, появляться класс с синим цветом при нажатии на кнопку старт. У этого квадрата добавить свое событие клика
4. Написать отдельную функцию для события клика на квадрат. В этой функции мы убираем голубой цвет, увеличиваем очки и удаляем событие КЛИКА НА КВАДРАТ. потом снова запускаем функцию события которое было при старте кнопки.
5. Внутри события старта кнопки сделайте условие так чтобы ровно один раз в начале игры запустился таймаут на 60 сек. По завершению таймаута у нас меняется HTML главного блока на gameover и выводим счёт
6. Обработать это с функцией таймера*/

const field = document.querySelector('.minefield');
const btn = document.querySelector('.start__btn');
let count = document.querySelector('.score');
let counter = 0;

for (let i = 0; i < 99; i++) {
  let tile = document.createElement('div');
  tile.className = 'minefield__box';
  field.appendChild(tile);
}

let arrBoxes = document.querySelectorAll('.minefield__box');

const randInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const changeColor = () => {
  //дописать ремув ивента changeColor
  document.removeEventListener('click', changeColor);
  
  let startBox = randInt(0, arrBoxes.length - 1);  
  let randomBox = arrBoxes[startBox];

  randomBox.classList.add('indigo'); 
  
  const clickBox = () => {  
    //дописать ремув ивента changeColor
    document.removeEventListener('click', changeColor);
    randomBox.classList.remove('indigo'); 
    counter++;   
    count.innerText = counter; 
    randomBox.removeEventListener('click', clickBox);   
  };
  //добавить на randomBox ивент changeColor
  randomBox.addEventListener('click', changeColor);
  randomBox.addEventListener('click', clickBox);  
  };

btn.addEventListener('click', changeColor);

