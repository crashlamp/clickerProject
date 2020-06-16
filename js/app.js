let cats = ['Rumbler'];
let images = ['Pictures/Rumbler.jpg'];

for (let i = 0; i < cats.length; i++) {
  let cat = cats[i];
  let img = images[i];
  let clickCounter = 0;
  let catContainer = document.querySelector('.catList');
  let catListItem = document.createElement('li');
  catListItem.innerHTML = cat;
  catContainer.appendChild(catListItem);
};
