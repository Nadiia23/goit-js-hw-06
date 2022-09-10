// const btnRef = document.querySelector('[type= "number"]');
// const createdRef = document.querySelector ("[data-create]");
// const destroyRef = document.querySelector("[data-destroy]");
// const boxesRef = document.querySelector("#boxes");


// function onCreateMarkup() {
//   const value = inputRef.value;
// if (!value) return;
// const markup = createMarkup(value);
// updateMarkup(markup);
// }

// function createMarkup(payload){
// let size = 30
// const markup = [];
// for(let index = 0; index < Number(payload); index++) {
//   markup.push(`<div class="item" style="width: ${size}px; height: ${size}px; background: ${getRandomHexColor()}"></div>`);
//   size +=10;
// }
// return markup.join("");
// }

// function updateMarkup(markup = "") {
//   boxesRef.innerHTML = markup;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// createdRef.addEventListener("click", onCreateMarkup);
// destroyRef.addEventListener("click", () => {
//   inputRef.value = "";
//   updateMarkup();
// });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("[type='number']"),
  btnCreate: document.querySelector("[data-create]"),
  div: document.querySelector("#controls"),
  divBoxes: document.querySelector("#boxes"),
  btnDestroy: document.querySelector("[data-destroy]"),
};
refs.div.addEventListener("click", onBtnClick);
function onBtnClick(event) {
  const btnEvent = event.target.dataset;
  if(btnEvent.hasOwnProperty("create")) {
    onBtnCreateClick();
  } else if(btnEvent.hasOwnProperty("destroy")) {
    onBtnDestroyClick();
  } else {
    return;
  }
}
// refs.btnCreate.addEventListener("click", onBtnCreateClick);
// refs.btnDestroy.addEventListener("click", onBtnDestroyClick);



function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.append(box);
    size += 10;
  }
}

function onBtnCreateClick(event) {
    createBoxes(refs.input.value);
    refs.input.value = '';
}

function onBtnDestroyClick() {
  let {value} = refs.input;
    if (!value || value < 0) {
      refs.divBoxes.innerHTML = '';
      return;
    }
    for (let i = 0; i < value; i++) {
      if (i > refs.divBoxes.childElementCount - 1) {
        return;
      }
      refs.divBoxes.lastElementChild.remove();
    }
  }
