const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function windowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = windowSize;
