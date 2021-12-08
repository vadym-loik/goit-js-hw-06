const textEl = document.getElementById('text');

const inputEl = document.getElementById('font-size-control');

inputEl.addEventListener('input', event => {
  const onRangeChange = inputEl.value;
  //   console.log(size);

  textEl.style.fontSize = onRangeChange + 'px';
});
