const keys = Object.keys(localStorage);
const values = Object.values(localStorage);
const listItems = keys.map((key, index) => {
  const li = document.createElement('li');
  li.textContent = `${key}: ${values[index]}`;
  return li;
});
const ul = document.getElementById('localStorageValues');
listItems.forEach(li => ul.appendChild(li));