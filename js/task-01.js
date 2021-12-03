const categories = document.querySelectorAll('#categories li.item');
const numberOfCategories = categories.length;
console.log(`Кількість категорій: ${numberOfCategories}`);

// перетворюємо NodeList в Array
const categoryArr = [...categories];
const headingTextArray = categoryArr.map(item => {
  const text = item.querySelector('h2').textContent;
  const elements = item.querySelector('ul').children.length;
  console.log(`Категорія: ${text}`);
  console.log(`Кількість елементів: ${elements}`);
});
