import { toUSD } from '../common/format.js';
// import plants from '../data/plants.js';


function createRow(plant) {
    const tr = document.createElement('tr');
    console.log (plant);
    
    const nameCell = document.createElement('td');
    nameCell.classList.add('align-left');
    nameCell.textContent = plant.id;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = plant.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = plant.price;
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.classList.add('line-item-total');
    
    const total = newFunction(plant);
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}

export default createRow

export function newFunction(plant) {
    return Number(plant.quantity) * Number(plant.price);
}

export function total(plant) {

    const orderTotalCell = 0;
    for (let i = 0; i < plant.length; i++) {
        const element = plant[i];
        
        console.log(element)
    }
}

