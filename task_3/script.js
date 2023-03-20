const button = document.querySelector('.button');
const status = document.querySelector('.location');

const error = () => {
  status.textContent = 'Информация о местоположении недоступна';
};

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
};

button.addEventListener('click', () => {
    status.textContent = 'Определение местоположения…';
    navigator.geolocation.getCurrentPosition(success, error);
    let width = window.screen.width;
    let height = window.screen.height;
    let span = document.querySelector('.size'); 
    span.textContent = `Размер вашего экрана ${width} px * ${height} px`;
});





  






