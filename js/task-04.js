let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  //   console.log('Вешаю слушателя события на целевую кнопку');
  valueEl += 1;

  counterValue.innerHTML = valueEl;

  //   console.log('counterValue', counterValue);
});

dekrBtn.addEventListener('click', event => {
  //   console.log('Снимаю слушателя события с целевой кнопки');
  valueEl -= 1;

  counterValue.innerHTML = valueEl;
  //   console.log('counterValue', counterValue);
});
