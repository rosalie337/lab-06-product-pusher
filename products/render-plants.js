function renderPlant(plant) {
    const li = document.createElementById('li');
    li.className = plant.classification;
    li.title = plant.description;

    const h3 = document.createElementById(h3);
    h3.textContent = plant.name;

    const img = document.createElement('img');
    img.src = '../assets/' + plant.image;
    img.alt = plant.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + plant.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = plant.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;

}

export default renderPlant;