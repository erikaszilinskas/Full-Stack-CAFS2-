// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

window.addEventListener('resize', windowSize);

function windowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}


