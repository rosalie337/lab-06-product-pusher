import plants from '../data/plants.js';
import { findById, orderTotal } from '../common/utils.js';
import createRow from './render-cart-items.js';
import { toUSD } from '../common/format.js';

const initializeEmptyCart = '[]';
const cartInLocalStorage = localStorage.getItem('CART') || initializeEmptyCart;

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const cart = JSON.parse(cartInLocalStorage);

for(let i = 0; i < cart.length; i++) {
    const cartItem = cart[i]; // will get the cart items 
    const plant = findById(cart, cartItem.id); // this is suppose to give us the price and display name of the item, how?
    const dom = createRow(cartItem, plant); 

    tbody.appendChild(dom);
}
const orderButton = document.getElementById ('order-button');

orderButton.addEventListener('click', () => {
    localStorage.removeItem('CART');
    alert('Order placed:\n' + JSON.stringify(cart, true, 2));
    window.location = '../index.html'
})
const total = orderTotal(cart, plants);
orderTotalCell.textContent = toUSD(total);