// document.addEventListener('DOMContentLoaded', function() {
//   const container = document.querySelector('.flower-fall-container');

//   function createFlower() {
//       const flower = document.createElement('div');
//       flower.classList.add('flower');
//       flower.style.left = Math.random() * 100 + 'vw'; /* Случайное положение по горизонтали */
//       container.appendChild(flower);
//       setTimeout(() => {
//           flower.remove(); // Удаление цветка после завершения анимации
//       }, 5000); // Время анимации в миллисекундах
//   }

//   setInterval(createFlower, 100); // Создание нового цветка каждые 500 миллисекунд
// });

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.flower-fall-container');

  function createFlower() {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      const randomFlower = Math.floor(Math.random() * 4) + 1; // Случайный выбор цветка от 1 до 4
      flower.classList.add('flower' + randomFlower); // Добавление класса для соответствующего цветка
      flower.style.left = Math.random() * 100 + 'vw'; /* Случайное положение по горизонтали */
      container.appendChild(flower);
      setTimeout(() => {
          flower.remove(); // Удаление цветка после завершения анимации
      }, 5000); // Время анимации в миллисекундах
  }

  setInterval(createFlower, 75); // Создание нового цветка каждые 100 миллисекунд
});

