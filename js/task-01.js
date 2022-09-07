const listRef = document.querySelectorAll('.item')
console.log(`Number of categories: ${(Number(listRef.length))}`);


listRef.forEach(element =>
console.log(
    `Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`
    ));

