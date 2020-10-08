import { toUSD } from '../common/format.js'

function renderPlant(plant) {
    const li = document.createElement('li');
    li.className = plant.classification;
    li.title = plant.description;

    const h3 = document.createElement('h3');
    h3.textContent = plant.name;

    const img = document.createElement('img');
    img.src = '../assets/' + plant.image;
    img.alt = plant.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(plant.price);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = plant.id;
    button.addEventListener('click', () => {
        
        //set variable to the cart in local storage
        const initializeEmptyCart = '[]';
        const cartInLocalStorage = localStorage.getItem('CART') || initializeEmptyCart;
        const cart = JSON.parse(cartInLocalStorage);

        let itemInCart = findById(cart, plant.id);

        //if there isn't anything in the cart
        if(!itemInCart) {

            // cart item includes the plant id and the quantity
            const initializedCartItem = {

                // plant is the PASSED parameter
                id: plant.id,
                quantity: 1
            };
        
            // push an itemInCart into the cart
            cart.push(initializedCartItem);
        }
        else {
            // if that item is in the cart add one to the quantity 
            itemInCart.quantity++;
        }

        const stringCart = JSON.stringify(cart);

        localStorage.setItem('CART', stringCart);

        alert('1' + plant.name + 'added to cart');
    });

    p.appendChild(button);

    li.appendChild(p);

    return li;

}

export default renderPlant;