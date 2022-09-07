function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColorRef = document.querySelector('body');
const textRef = document.querySelector('.color');
const changeBtnRef = document.querySelector('.change-color');


changeBtnRef.addEventListener('click', targetInputHandler);

function targetInputHandler(event) {
  const colorRef = getRandomHexColor();
  bodyColorRef.style.backgroundColor = colorRef;
  textRef.textContent = colorRef;
}