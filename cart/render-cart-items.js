import { toUSD } from '../common/format.js';

function renderPlant(plant) {
    const nameCell = document.createElement('tr');
    nameCell.classList.add('align-left');
    nameCell.textContent = plant.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = cartItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = cartItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(plant.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.classList.add('line-item-total');
    const total = Number(cartItem.quantity) * Number(plant.price);
    totalCell.textContent = toUSD(total);
    li.appendChild(totalCell);

    return tr;
}

export default renderCartItem;

