const formInputRef = document.querySelector('.login-form');
// console.log(formInputRef)

formInputRef.addEventListener('submit', targetInputHandler);

function targetInputHandler(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    if(!email.value.trim() || !password.value.trim()) {
     return alert('Fill all fields, please!');
    }
    const userData = {
        email: email.value,
        password: password.value,
    }

    console.dir(userData);
    event.currentTarget.reset();
}
