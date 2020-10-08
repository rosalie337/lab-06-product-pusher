import cart from '../data/cart.js';
import plants from '../data/plants.js';
import { findById, orderTotal, toUSD } from '../common/utils.js';
import createRow from './render-cart-items.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for(let i = 0; cart.length; i++) {
    
    const cartItem = cart[i]; // will get the cart items 
    const plant = findById(plants, cartItem.id); // this is suppose to give us the price and display name of the item, how?
    const dom = createRow(cartItem, plant); 

    tbody.appendChild(dom);
}

const total = orderTotal(cart, plants);
orderTotalCell.textContent = toUSD(total);