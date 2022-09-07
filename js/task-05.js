const outputRef = document.querySelector('span#name-output');

const inputRef = document.querySelector('#name-input');

const textRef = outputRef.textContent;

 inputRef.addEventListener('input', onInputChanges)

 function onInputChanges(event) {
    console.log(event.currentTarget.value);
    outputRef.textContent = event.currentTarget.value.trim();

    if(event.currentTarget.value.trim() === '') {
      outputRef.textContent = textRef;
    }
 }


// const nameType = document.querySelector('#name-input');
// const nameText = document.querySelector('#name-output');
// let nameBase = 'Anonymous';

// const nameTypeAdd = (e) =>{
//     if (e.currentTarget.value === '') {
//         nameText.textContent = 'Anonymous';
//     }
//     else {
//     nameText.textContent = e.currentTarget.value
//     }
// };

// nameType.addEventListener('change', nameTypeAdd);