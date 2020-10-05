// import functions and grab DOM elements
import plants from '../data/plants.js'
import renderPlant from '../products/render-plant.js'

// initialize state
const list = document.getElementById('plants');

// set event listeners to update state and DOM
for(let i = 0; i < plants.length; i++) {
    const plant = plants[i];
    const dom = renderPlants(plant);
    list.appendChild(dom);

}