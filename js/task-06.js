const inputElRef = document.querySelector('#validation-input');

const validLength = Number(inputElRef.dataset.length);
inputElRef.addEventListener("blur", onInputValid);

function onInputValid(event) {
    if (event.target.value.length === validLength) {
        updateClassElem("valid", "invalid");
    } else {
        updateClassElem("invalid", "valid");
    }
}
function updateClassElem(addEl, remEl) {
    inputElRef.classList.remove(remEl);
    inputElRef.classList.add(addEl);
}