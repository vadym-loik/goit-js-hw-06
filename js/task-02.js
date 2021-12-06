const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let listEl = document.createElement('li');
// listEl.textContent = '';
listEl.classList.add('item');
// console.log(listEl);
const navEl = document.querySelector('#ingredients');
// console.log(navEl);
navEl.appendChild(listEl);

const list = ingredients.reduce((total, item) => total + `<li>${item}</li>`, '');

navEl.innerHTML = list;
