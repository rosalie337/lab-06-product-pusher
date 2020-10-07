import { toUSD } from '../common/format.js';

function renderPlant(plant) {
    const li = document.createElement('li');
    li.title = fruit.description;

    const h3 = document.createElement('h3');
    h3.textContent = fruit.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + plant.image;
    img.alt = fruit.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(plant.price);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = fruit.code;
    p.appendChild(button);

    li.appendChild(p)

    return li;
}

export default renderFruit;

