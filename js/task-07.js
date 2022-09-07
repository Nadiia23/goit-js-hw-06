const sizeControl = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

sizeControl.addEventListener('input', (event) => {
    text.style.fontSize = `${sizeControl.value}px`;
    console.log(sizeControl.value);
})