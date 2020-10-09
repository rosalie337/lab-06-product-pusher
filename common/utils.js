export function lineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency (amount);

}
export function findById(items, id) {
    for(let i = 0; i < items.length; i ++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }

    return null;
}

// I seen export function to USD(number), but is already in format.js. Is it better to put them all in utils.js or separate for modularity?

function roundCurrency(amount) {
    return Math.round(amount * 100)/ 100;

}

export function orderTotal(cart, plants) {
    let orderTotal = 0;

    for(let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const plant = findById(plants, lineItem.id);
        const lineTotal = lineTotal(lineItem.quantity, plant.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}