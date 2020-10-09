import { getPlants } from '../common/utils.js';

const myForm = document.getElementById('form');

myForm.addEventListener('submit', e => {
    // prevent the default behavior
    e.preventDefault();

    const formDataInput = new FormData(myForm);

    const newProduct = {
        id: formDataInput.get('id'),
        name: formDataInput.get('name'),
        description: formDataInput.get('description'),
        price: Number(formDataInput.get('price')),
        image: formDataInput.get('image'),

    };

    const existingPlants = getPlants();

    existingPlants.push(newProduct);

    const stringyPlants = JSON.stringify(existingPlants);

    window.location = '../products/index.html;'
});
