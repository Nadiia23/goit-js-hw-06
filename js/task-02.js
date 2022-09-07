const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
listItemRef.classList.add('item');
return listItemRef;
})
// console.log(elements)

ingredientsRef.append(...elements);

