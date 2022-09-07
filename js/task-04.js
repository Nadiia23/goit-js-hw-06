let counterValue = 0;

const decrBtn = document.querySelector(`[data-action = "decrement"]`)
console.log(decrBtn);
const incrBtn = document.querySelector(`[data-action = "increment"]`)
console.log(incrBtn);
const value = document.querySelector(`#value`)

const decrBtnValue = () =>  {
    counterValue -= 1
    value.textContent = counterValue
};

decrBtn.addEventListener('click', decrBtnValue);

const incrBtnValue = () =>  {
    counterValue += 1;
    value.textContent = counterValue
};

incrBtn.addEventListener('click', incrBtnValue);
